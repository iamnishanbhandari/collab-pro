import React from "react";
import PostBox from "./PostBox";
import InfluencerSideBar from "./InfluencerSideBar";

const InfluencerDashboard = () => {
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

export default InfluencerDashboard;
