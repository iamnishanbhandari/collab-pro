import React from "react";
import PostBox from "./BrandPostBox";
import InfluencerSideBar from "./BrandSideBar";

const BrandDashboard = () => {
  return (
    <>
      <div className="flex">
        <InfluencerSideBar />
        <div>
          <PostBox />
          <PostBox />
          <PostBox />
        </div>
      </div>
    </>
  );
};

export default BrandDashboard;
