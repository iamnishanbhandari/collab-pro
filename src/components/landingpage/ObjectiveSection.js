import React from "react";
import micgirl from "../../assets/micgirl.png";
const ObjectiveSection = () => {
  return (
    <>
      <div id="why-us-section" className="flex justify-evenly mt-40  ">
        <div className=" w-auto ">
          <div className=" m-10">
            <div className="text-yellow-600 text-6xl ">Our Goals</div>
            <div className="text-2xl mt-4">
              Our goal at Collab-pro is to empower businesses and influencers to
              create meaningful marketing partnerships that drive engagement,
              reach, and results.
            </div>
          </div>

          <div className=" m-10">
            <div className="text-yellow-600 text-6xl ">
              Key Benefits (Objectives)
            </div>
            <div className="text-2xl mt-4">
              Including a list of specific objectives or key benefits that users
              can gain from using Collab-pro, such as efficient collaboration,
              data-driven insights, and real-time analytics.
            </div>
          </div>

          <div className=" m-10">
            <div className="text-yellow-600 text-6xl ">Mission</div>
            <div className="text-2xl mt-4">
              This would provide a concise statement about the fundamental
              purpose and mission of Collab-pro, such as "Empowering
              Collaborative Marketing."
            </div>
          </div>
        </div>
        <div className="mr-20">
          <img src={micgirl} className="mt-24" width={500}></img>
        </div>
      </div>
    </>
  );
};

export default ObjectiveSection;
