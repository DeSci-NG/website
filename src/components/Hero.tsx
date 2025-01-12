import { HeroCard } from "./HeroCard";
import desciCase from "../../public/A case for decentralized science.png";
import whitePaper from "../../public/whitepaper thumbnail.png";

export const Hero = () => {
  return (
    <div className="flex-1 py-20 flex flex-col items-center justify-center layout__container text-center">
      <p className="text-[50px] 2xs:text-[40px] xs:text-[24px] leading-tight">
        Accelerating the Ideals of <br className="sm:hidden" /> DeSci in Nigeria{" "}
      </p>
      <p className="text-[25px] xs:text-sm mt-[72px] 2xs:mt-[50px]">
        Inspired by Sci-hub and the global $scihub community.{" "}
        <br className="xs:hidden" />
        An unstoppable force for education, innovation and humanity.
      </p>

      <div className="flex flex-wrap gap-y-[40px] justify-between mt-[125px] 2xs:mt-[65px] w-full">
        <HeroCard
          link="/a-case-for-decentralized-science"
          title="Read “A Case for Decentralized Science”"
          image={desciCase}
        />
        <HeroCard
          link="https://www.scihub.fans/scihub_paradigm.pdf"
          title="Read “The $scihub Whitepaper”"
          image={whitePaper}
        />
      </div>
    </div>
  );
};
