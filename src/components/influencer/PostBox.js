import React, { useState } from "react";
import cokerectangle from "../../assets/cokerectangle.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostBox = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleNotification = () => {
    toast.success("Request sent successfully");
  };

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <>
      <div>
        <div className="flex mt-0 pl-2 pt-1 ">
          {isPopupOpen && (
            <div className="border popup-overlay fixed inset-0 flex items-center justify-center">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <span
                  className="flex justify-end -m-4 text-3xl hover:cursor-pointer text-gray-500"
                  onClick={closePopup}
                >
                  &times;
                </span>
                <div className=" mb-4">
                  <div className="flex justify-center">
                    <img src={cokerectangle} alt="img"></img>
                  </div>
                  <div>
                    <p className="font-semibold flex justify-center">
                      Cokemania Dashain-Tihar Mahostav
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-500 font-semibold flex justify-center ">
                      by Bottlers Nepal Limited
                    </p>
                  </div>
                </div>

                <div className="flex justify-around gap-10">
                  <div className="font-semibold ">Campaing Description</div>
                  <div className="text-gray-600 w-96 text-sm">
                    Hello all, we are currently searching for creators who can
                    produce engaging and entertaining content that can promote
                    product, Coca-cola in this festive month of October and
                    November. Your content should deliver the fun environment
                    with the family, displaying the addition of fun and
                    excitement in the family gathering with Coca-cola.{" "}
                  </div>
                </div>

                <div className="flex justify-around gap-10">
                  <div className="font-semibold ">Speciality as a creator</div>
                  <div className="text-gray-600 w-96">Entertainment</div>
                </div>

                <div className="flex justify-around gap-10">
                  <div className="font-semibold ">Forms of cooperation</div>
                  <div className="text-gray-600 w-96">
                    Video Content and Social Media Post
                  </div>
                </div>

                <div className="flex justify-around gap-10">
                  <div className="font-semibold ">Social requirement</div>
                  <div className="text-gray-600 w-96">
                    {" "}
                    Tiktok and Instagram
                  </div>
                </div>

                <div className="flex justify-around gap-10">
                  <div className="font-semibold ">Campaign Timing</div>
                  <div className="text-gray-600 w-96">
                    Oct 15 - November 17,2024
                  </div>
                </div>

                <div className="flex justify-around gap-10">
                  <div className="font-semibold ">Campaing Budget</div>
                  <div className="text-gray-600 w-96">
                    Rs 25000 for 200.0K impressions{" "}
                  </div>
                </div>

                <div className="flex justify-around gap-10">
                  <div className="font-semibold ">Additional Packages</div>
                  <div className="text-gray-600 w-96">Rs 0.0K </div>
                </div>

                <div className=" flex justify-center  mt-4 ">
                  <button
                    className="bg-blue-600 p-2 flex w-80 pl-20 rounded-xl text-white hover:bg-blue"
                    onClick={handleNotification}
                  >
                    Request to team up
                  </button>
                  <ToastContainer />
                </div>
              </div>
            </div>
          )}
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
            <div className=" mt-4">
              <button
                className=" text-green-600 font-semibold "
                onClick={openPopup}
              >
                Learn More{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostBox;
