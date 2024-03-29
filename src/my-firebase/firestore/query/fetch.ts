import {
  fetchFirestoreDocuments,
  getCollectionData,
  getCollectionRef,
  getDocData,
  getDocRef,
} from "../_helpers";

import type { MyDb } from "~/types/database";

export const fetchLandingPage = async () => {
  const docRef = getDocRef("pages", "landing");

  const data = (await getDocData(
    docRef,
  )) as unknown as MyDb["pages"]["landing"];

  return data;
};

export const fetchAboutUsPage = async () => {
  const docRef = getDocRef("pages", "aboutUs");

  const data = (await getDocData(
    docRef,
  )) as unknown as MyDb["pages"]["aboutUs"];

  return data;
};

export const fetchTheoryOfChangePage = async () => {
  const docRef = getDocRef("pages", "theoryOfChange");

  const data = (await getDocData(
    docRef,
  )) as unknown as MyDb["pages"]["theory-of-change"];

  return data;
};

export const fetchTestimonialsPage = async () => {
  const docRef = getDocRef("pages", "testimonials");

  const data = (await getDocData(
    docRef,
  )) as unknown as MyDb["pages"]["testimonials"];

  return data;
};

export const fetchProgrammesPage = async () => {
  const docRef = getDocRef("pages", "programmes");

  const data = (await getDocData(
    docRef,
  )) as unknown as MyDb["pages"]["programmes"];

  return data;
};

export const fetchDonatePage = async () => {
  const docRef = getDocRef("pages", "donate");

  const data = (await getDocData(docRef)) as unknown as MyDb["pages"]["donate"];

  return data;
};

export const fetchDonateSuccessPage = async () => {
  const docRef = getDocRef("pages", "donateSuccess");

  const data = (await getDocData(
    docRef,
  )) as unknown as MyDb["pages"]["donate-success"];

  return data;
};

export const fetchVolunteerPositionsPage = async () => {
  const docRef = getDocRef("pages", "volunteerPositions");

  const data = (await getDocData(
    docRef,
  )) as unknown as MyDb["pages"]["volunteer-positions"];

  return data;
};

export const fetchCareersPage = async () => {
  const docRef = getDocRef("pages", "careers");

  const data = (await getDocData(
    docRef,
  )) as unknown as MyDb["pages"]["careers"];

  return data;
};

export const fetchWorkshopsPage = async () => {
  const docRef = getDocRef("pages", "workshops");

  const data = (await getDocData(
    docRef,
  )) as unknown as MyDb["pages"]["workshops"];

  return data;
};

export const fetchOneImage = async (id: string) => {
  const docRef = getDocRef("images", id);

  const data = (await getDocData(docRef)) as unknown as MyDb["image"];

  return data;
};

export const fetchManyImages = async (ids: string[]) => {
  const data = (await fetchFirestoreDocuments(
    "images",
    ids,
  )) as unknown as MyDb["image"][];

  return data;
};

export const fetchImages = async () => {
  const collectionRef = getCollectionRef("images");

  const data = (await getCollectionData(
    collectionRef,
  )) as unknown as MyDb["image"][];

  return data;
};

export const fetchParticipantTestimonials = async () => {
  const collectionRef = getCollectionRef("participant-testimonials");

  const data = (await getCollectionData(
    collectionRef,
  )) as unknown as MyDb["participant-testimonial"][];

  return data;
};
export const fetchProfessionalTestimonials = async () => {
  const collectionRef = getCollectionRef("professional-testimonials");

  const data = (await getCollectionData(
    collectionRef,
  )) as unknown as MyDb["professional-testimonial"][];

  return data;
};
export const fetchOneProgramme = async (id: string) => {
  const docRef = getDocRef("programmes", id);

  const data = (await getDocData(docRef)) as unknown as MyDb["programme"];

  return data;
};

export const fetchManyProgrammes = async (ids: string[]) => {
  const data = (await fetchFirestoreDocuments(
    "programmes",
    ids,
  )) as unknown as MyDb["programme"][];

  return data;
};

export const fetchProgrammes = async () => {
  const collectionRef = getCollectionRef("programmes");

  const data = (await getCollectionData(
    collectionRef,
  )) as unknown as MyDb["programme"][];

  return data;
};

export const fetchOneSupporter = async (id: string) => {
  const docRef = getDocRef("supporters", id);

  const data = (await getDocData(docRef)) as unknown as MyDb["supporter"];

  return data;
};

export const fetchManySupporters = async (ids: string[]) => {
  const data = (await fetchFirestoreDocuments(
    "supporters",
    ids,
  )) as unknown as MyDb["supporter"][];

  return data;
};

export const fetchSupporters = async () => {
  const collectionRef = getCollectionRef("supporters");

  const data = (await getCollectionData(
    collectionRef,
  )) as unknown as MyDb["supporter"][];

  return data;
};

export const fetchOnePartner = async (id: string) => {
  const docRef = getDocRef("partners", id);

  const data = (await getDocData(docRef)) as unknown as MyDb["partner"];

  return data;
};

export const fetchManyPartners = async (ids: string[]) => {
  const data = (await fetchFirestoreDocuments(
    "partners",
    ids,
  )) as unknown as MyDb["partner"][];

  return data;
};

export const fetchPartners = async () => {
  const collectionRef = getCollectionRef("partners");

  const data = (await getCollectionData(
    collectionRef,
  )) as unknown as MyDb["partner"][];

  return data;
};

export const fetchOneVolunteerPosition = async (id: string) => {
  const docRef = getDocRef("volunteer-positions", id);

  const data = (await getDocData(
    docRef,
  )) as unknown as MyDb["volunteer-position"];

  return data;
};

export const fetchVolunteerPositions = async () => {
  const collectionRef = getCollectionRef("volunteer-positions");

  const data = (await getCollectionData(
    collectionRef,
  )) as unknown as MyDb["volunteer-position"][];

  return data;
};

export const fetchManyVolunteerPositions = async (ids: string[]) => {
  const data = (await fetchFirestoreDocuments(
    "volunteer-positions",
    ids,
  )) as unknown as MyDb["volunteer-position"][];

  return data;
};

export const fetchOneCareer = async (id: string) => {
  const docRef = getDocRef("careers", id);

  const data = (await getDocData(docRef)) as unknown as MyDb["career"];

  return data;
};

export const fetchCareers = async () => {
  const collectionRef = getCollectionRef("careers");

  const data = (await getCollectionData(
    collectionRef,
  )) as unknown as MyDb["career"][];

  return data;
};

export const fetchManyCareers = async (ids: string[]) => {
  const data = (await fetchFirestoreDocuments(
    "careers",
    ids,
  )) as unknown as MyDb["career"][];

  return data;
};

export const fetchOneWorkshop = async (id: string) => {
  const docRef = getDocRef("workshops", id);

  const data = (await getDocData(docRef)) as unknown as MyDb["workshop"];

  return data;
};

export const fetchWorkshops = async () => {
  const collectionRef = getCollectionRef("workshops");

  const data = (await getCollectionData(
    collectionRef,
  )) as unknown as MyDb["workshop"][];

  return data;
};

export const fetchOrgDetails = async () => {
  const docRef = getDocRef("singles", "orgDetails");

  const data = (await getDocData(
    docRef,
  )) as unknown as MyDb["singles"]["orgDetails"];

  return data;
};

export const fetchLinkLabels = async () => {
  const docRef = getDocRef("singles", "linkLabels");

  const data = (await getDocData(
    docRef,
  )) as unknown as MyDb["singles"]["linkLabels"];

  return data;
};

export const fetchHeader = async () => {
  const docRef = getDocRef("singles", "header");

  const data = (await getDocData(
    docRef,
  )) as unknown as MyDb["singles"]["header"];

  return data;
};

export const fetchFooter = async () => {
  const docRef = getDocRef("singles", "footer");

  const data = (await getDocData(
    docRef,
  )) as unknown as MyDb["singles"]["footer"];

  return data;
};
