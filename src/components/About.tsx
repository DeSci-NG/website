import { Link } from "react-router";

export const About = () => {
  return (
    <div className="flex md:flex-col gap-y-7 justify-between text-[25px] 2xs:text-base layout__container py-24 2xs:py-10">
      <div className="w-1/3 md:w-[80%]">
        <p className="text-primary-red mb-5 2xs:mb-2 font-[700]">About DeSci NG</p>
        <p>
          Inspired by Sci-hub and the global $scihub community. An unstoppable
          force for education, innovation and humanity.
        </p>
      </div>
      <div className="">
        <p className="text-primary-red mb-5 2xs:mb-2 font-[700]">Resources</p>
        <div className="flex flex-col">
          <Link to="/">Donations</Link>
          <Link to="/">$scihub website</Link>
          <Link to="/">$scihub whitepaper</Link>
        </div>
      </div>
    </div>
  );
};
