import React, { useState } from "react";
import Nima from "../../assets/Nima.png";
import cokerectangle from "../../assets/cokerectangle.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import instagram from "../../assets/instagram.png";
import tiktok from "../../assets/tiktok.png";
import Nimabhauju from "../../assets/Nimabhauju.png";

const BrandPostBox = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleNotification = () => {
    toast.success("Collaboration offer has been sent");
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
                    <img src={Nima} alt="img"></img>
                  </div>
                  <div>
                    <p className="font-semibold flex justify-center">
                      Nima Yangchen{" "}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-500 font-semibold flex justify-center "></p>
                  </div>
                </div>
                <div className="flex justify-around gap-10">
                  <div className="font-semibold ">Followers</div>
                  <div className="flex gap-5 text-gray-600 w-96 text-sm">
                    <div className="flex gap-2 ">
                      <div>
                        <img src={instagram}></img>
                      </div>
                      <div>
                        <span className="">53.0k</span>
                      </div>
                    </div>
                    <div className="flex gap-2 ">
                      <div>
                        <img src={tiktok}></img>
                      </div>
                      <div>
                        <span className="">53.0k</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-around gap-10">
                  <div className="font-semibold ">Expertise</div>
                  <div className="text-gray-600 w-96">Singing | Vlogging</div>
                </div>
                <div className="flex justify-around gap-10">
                  <div className="font-semibold ">About me</div>
                  <div className="text-gray-600 w-96">
                    Hello,Its me Nima Yangchen. I love to sing a song and travel
                    new places.{" "}
                  </div>
                </div>
                <div className="flex justify-around gap-10">
                  <div className="font-semibold ">Pricing</div>
                  <div className="text-gray-600 w-96">
                    Rs 5000 for 25.0K impressions
                  </div>
                </div>

                <div className=" flex justify-center  mt-4 ">
                  <button
                    className="bg-blue-600 p-2 flex w-80 pl-20 rounded-xl text-white hover:bg-blue"
                    onClick={handleNotification}
                  >
                    Collaborate with me{" "}
                  </button>
                  <ToastContainer />
                </div>
              </div>
            </div>
          )}
          <div className="pt-10 ml-8 ">
            <img src={Nimabhauju} alt="img" height={20}></img>
          </div>
          <div className="mt-10 ml-5">
            <div>
              <p className="font-bold text-2xl ">Nima Yangchen </p>
            </div>
            <div>
              <p className="text-gray-500 font-semibold">Singer | Vlogger </p>
            </div>
            <div className="flex gap-2 mt-2 ">
              <div className="flex gap-2 ">
                <div>
                  <img src={instagram}></img>
                </div>
                <div>
                  <span className="">53.0k</span>
                </div>
              </div>
              <div className="flex gap-2 ">
                <div>
                  <img src={tiktok}></img>
                </div>
                <div>
                  <span className="">53.0k</span>
                </div>
              </div>
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

export default BrandPostBox;
