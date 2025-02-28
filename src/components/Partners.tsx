import vitaminC from "../../public/vc.png";
import sciHub from "../../public/scihub.png";
import thriveRise from "../../public/thriverise.png";

const Partner = ({
  name,
  logo,
  imageClass,
}: {
  name: string;
  logo: string;
  imageClass?: string;
}) => {
  return (
    <div className="w-[30%] flex flex-col gap-y-10 2xs:gap-y-5 items-center justify-center">
      <img
        src={logo}
        alt="partner icon"
        className={`object-contain ${imageClass}`}
      />
      <p className="text-[18px] xs:text-[12px] text-center">{name}</p>
    </div>
  );
};

export const Partners = () => {
  return (
    <div className="layout__container py-10 2xs:pt-5">
      <div className="flex items-center justify-center">
        <p className="text-center bg-primary-red py-2 px-12 rounded-[60px] text-[22px] 2xs:text-[18px] 2xs:w-auto font-times-new-roman">
          Partners
        </p>
      </div>
      <div className="w-full flex flex-wrap gap-y-20 justify-evenly 2xs:justify-between items-start mt-20 2xs:mt-[70px]">
        <Partner
          name="Vitamin C"
          logo={vitaminC}
          imageClass="w-[120px] h-[120px] sm:h-[100px] sm:w-[100px] 2xs:h-[66px] 2xs:w-[66px]"
        />
        <Partner
          name="$Scihub Community"
          logo={sciHub}
          imageClass="w-[120px] h-[120px] sm:h-[100px] sm:w-[100px] 2xs:h-[66px] 2xs:w-[66px]"
        />
        <Partner
          name="ThriveRise Africa"
          logo={thriveRise}
          imageClass="w-[120px] h-[120px] sm:h-[100px] sm:w-[100px] 2xs:h-[66px] 2xs:w-[66px]"
        />
      </div>
    </div>
  );
};
