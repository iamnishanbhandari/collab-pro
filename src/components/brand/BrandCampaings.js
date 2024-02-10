import React from "react";
import cokerectangle from "../../assets/cokerectangle.png";
import BrandSideBar from "./BrandSideBar";

const BrandCampaings = () => {
  return (
    <>
      <div className="flex gap-5 ">
        <div>
          <BrandSideBar />
        </div>
        <div className=" mb-4  h-full flex ">
          <div className="flex justify-center mt-5  ">
            <img src={cokerectangle}></img>
          </div>
          <div className=" pt-25 pl-10">
            <div>
              <p className="font-bold flex justify-center  mt-20 text-3xl  ">
                Cokemania Dashain-Tihar Mahostav
              </p>
            </div>

            <div>
              <p className="text-gray-500 font-semibold flex justify-start ">
                by Bottlers Nepal Limited
              </p>
            </div>
            <div className="flex justify-start  ">
              <div className="text-gray-600 w-96 ">
                Rs 25000 <br /> 200.0K impressions{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandCampaings;
