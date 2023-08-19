import type { GetStaticProps } from "next";

import processDbData from "~/helpers/process-db-data";
import { myDb } from "~/my-firebase/firestore";
import type { MyDb } from "~/types/database";

export type StaticData = {
  footer: MyDb["singles"]["footer"];
  header: MyDb["singles"]["header"];
  linkLabels: MyDb["singles"]["linkLabels"];
  orgDetails: MyDb["singles"]["orgDetails"];
  logoImage: MyDb["image"] | null;

  page: ReturnType<(typeof processDbData)["landingPage"]["crossProcess"]>;

  participantTestimonials: ReturnType<
    (typeof processDbData)["participantTestimonial"]["crossProcess"]["many"]
  >;
  /*   partners: ReturnType<
    (typeof processDbData)["partner"]["crossProcess"]["many"]
  >;
  programmes: ReturnType<
    (typeof processDbData)["programme"]["crossProcess"]["many"]
  >;
  supporters: ReturnType<
    (typeof processDbData)["supporter"]["crossProcess"]["many"]
  >; */
};

// □ makes sense to seperate out validation e.g. of connected entries from processing?

// todo: process footer + header

export const getStaticProps: GetStaticProps<StaticData> = async () => {
  const footer = await myDb.footer.fetch();
  const header = await myDb.header.fetch();
  const linkLabels = await myDb.linkLabels.fetch();
  const orgDetails = await myDb.orgDetails.fetch();

  const page = await myDb.pages.landing.fetch();

  const connectedDocIds = {
    partners: page.partners.entries.map(
      (entry) => entry.dbConnections.partnerId,
    ),
    programmes: page.programmes.entries.map(
      (entry) => entry.dbConnections.programmeId,
    ),
    supporters: page.supporters.entries.map(
      (entry) => entry.dbConnections.supporterId,
    ),
  };

  const connectedDocsFetched = {
    participantTestimonials: await myDb["participant-testimonial"].fetchAll(),
    partners: await myDb.partner.fetchMany(connectedDocIds.partners),
    programmes: await myDb.programme.fetchMany(connectedDocIds.programmes),
    supporters: await myDb.supporter.fetchMany(connectedDocIds.supporters),
  };

  const connectedDocsSelfValidated = {
    participantTestimonials:
      processDbData.participantTestimonial.selfValidate.many(
        connectedDocsFetched.participantTestimonials,
      ),
    partners: processDbData.partner.selfValidate.many(
      connectedDocsFetched.partners,
    ),
    programmes: processDbData.programme.selfValidate.many(
      connectedDocsFetched.programmes,
    ),
    supporters: processDbData.supporter.selfValidate.many(
      connectedDocsFetched.supporters,
    ),
  };

  const connectedImageIds = [
    orgDetails.logoImage.dbConnections.imageId,
    page.bannerImage.dbConnections.imageId,
    page.workshops.image.dbConnections.imageId,
    page.supportUs.donate.image.dbConnections.imageId,
    page.supportUs.volunteer.image.dbConnections.imageId,
    ...connectedDocsSelfValidated.participantTestimonials.map(
      (doc) => doc.image.dbConnect.imageId,
    ),
    ...connectedDocsSelfValidated.partners.map(
      (doc) => doc.image.dbConnections.imageId,
    ),
    ...connectedDocsSelfValidated.programmes.flatMap((programme) => [
      programme.bannerImage.dbConnections.imageId,
      programme.summary.image.dbConnections.imageId,
    ]),
    ...connectedDocsSelfValidated.supporters.map(
      (supporter) => supporter.image.dbConnections.imageId,
    ),
  ].flatMap((i) => (i ? [i] : []));

  const connectedImages = await myDb.image.fetchMany(connectedImageIds);

  const connectedDocsProcessed = {
    participantTestimonials:
      processDbData.participantTestimonial.crossProcess.many(
        connectedDocsSelfValidated.participantTestimonials,
        { images: connectedImages },
      ),
    partners: processDbData.partner.crossProcess.many(
      connectedDocsSelfValidated.partners,
      { images: connectedImages },
    ),
    programmes: processDbData.programme.crossProcess.many(
      connectedDocsSelfValidated.programmes,
      { images: connectedImages },
    ),
    supporters: processDbData.supporter.crossProcess.many(
      connectedDocsSelfValidated.supporters,
      { images: connectedImages },
    ),
  };

  const pageCrossProcessed = processDbData.landingPage.crossProcess(page, {
    images: connectedImages,
    partners: connectedDocsProcessed.partners,
    programmes: connectedDocsProcessed.programmes,
    supporters: connectedDocsProcessed.supporters,
  });

  const logoImage =
    connectedImages.find(
      (image) => image.id === orgDetails.logoImage.dbConnections.imageId,
    ) || null;

  const data: StaticData = {
    footer,
    header,
    linkLabels,
    orgDetails,
    logoImage,

    page: pageCrossProcessed,

    participantTestimonials: connectedDocsProcessed.participantTestimonials,
    /*     partners: connectedDocsProcessed.partners,
    programmes: connectedDocsProcessed.programmes,
    supporters: connectedDocsProcessed.supporters, */
  };

  return {
    props: data,
  };
};
