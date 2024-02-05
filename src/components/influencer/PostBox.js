import React from "react";
import cokerectangle from "../../assets/cokerectangle.png";

const PostBox = () => {
  return (
    <>
      <div className="flex mt-5 p-2">
        <div>
          <img src={cokerectangle} alt="img" height={20}></img>
        </div>
        <div className="m-10">
          <div>
            <p className="font-bold text-2xl ">
              Cokemaina Dashain-Tihar Mahostav
            </p>
          </div>
          <div>
            <p className="text-gray-500 font-semibold">
              by Bottlers Nepal Limited
            </p>
          </div>
          <div className="mt-2 font-bold">
            <p>Rs 25,000/-</p>
          </div>
          <div className="mt-1 text-gray-500 font-semibold ">
            <p>For 200.0K impressions</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostBox;
