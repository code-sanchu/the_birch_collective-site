import Markdown from "markdown-to-jsx";

import { Icon } from "~/components/icons";
import { StorageImage } from "~/components/StorageImage";
import Ui from "~/components/ui-elements";

import type { StaticData } from "../_static-data";

import { strWithFallback } from "~/helpers/utilities";
import { type ExcludeNotInUse } from "~/types/database/_helpers";
import { type MyPick } from "~/types/utilities";

type Data = MyPick<StaticData["page"], "aboutAmy" | "mainText">;

const MainText = ({ aboutAmy, mainText }: Data) => (
  <div>
    <Ui.Page.MainText>{mainText}</Ui.Page.MainText>

    {aboutAmy === "not in use" ? null : (
      <>
        <Ui.Section.VerticalSpace />

        <AboutAmy aboutAmy={aboutAmy} />
      </>
    )}
  </div>
);

export default MainText;

const AboutAmy = ({
  aboutAmy,
}: {
  aboutAmy: ExcludeNotInUse<Data["aboutAmy"]>;
}) => (
  <div>
    <h3 className="font-display text-2xl text-brandGreen">
      <Markdown>{strWithFallback(aboutAmy.heading, "Meet Amy")}</Markdown>
    </h3>

    <div className="flex w-full justify-between gap-md sm:mt-xxs">
      <div>
        {aboutAmy.text !== "not in use" ? (
          <div className="flex items-center justify-between gap-md">
            <div className="custom-prose prose mt-sm w-full max-w-full">
              {aboutAmy.text}
            </div>

            {aboutAmy.image !== "not in use" ? (
              <div className="relative h-[100px] w-[100px] shrink-0 rounded-full border-4 border-brandLightBrown sm:hidden">
                <StorageImage
                  urls={aboutAmy.image.connectedImage.urls}
                  isCircle
                  position={aboutAmy.image.position}
                />
              </div>
            ) : null}
          </div>
        ) : null}

        {aboutAmy.followOnInstaText !== "not in use" &&
        aboutAmy.instaLink !== "not in use" ? (
          <div className="mt-sm flex items-center gap-md">
            <div className="custom-prose prose max-w-full">
              {aboutAmy.followOnInstaText}
            </div>

            <a className="text-xl" href={aboutAmy.instaLink}>
              <Icon.Instagram color="#833AB4" />
            </a>
          </div>
        ) : null}
      </div>

      {aboutAmy.image !== "not in use" ? (
        <div className="relative hidden h-[100px] w-[100px] shrink-0 rounded-full border-4 border-brandLightBrown sm:block">
          <StorageImage
            urls={aboutAmy.image.connectedImage.urls}
            isCircle
            position={aboutAmy.image.position}
          />
        </div>
      ) : null}
    </div>
  </div>
);
