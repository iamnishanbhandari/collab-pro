import React from "react";
import BrandPostBox from "./BrandPostBox";
import BrandSideBar from "./BrandSideBar";
import messengerpp from "../../assets/messengerpp.png";
import messengerpp2 from "../../assets/messengerpp2.png";
import messengerpp3 from "../../assets/messengerpp3.png";

const BrandChat = () => {
  return (
    <>
      <div className="flex">
        <BrandSideBar />
        <div className="flex">
          <div className="flex h-screen">
            <div
              class=" flex flex-col bg-clip-content rounded-xl bg-white text-gray-900 
            w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray"
            >
              <div class="mb-2 pt-4 flex justify-around">
                <h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">
                  Messages{" "}
                </h5>
                <div className="flex font-semibold text-gray-500 hover:cursor-pointer gap-1">
                  <div
                    class="relative items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-blue-500/20 text-blue-900 py-1 px-2 text-xs rounded-full"
                    style={{ opacity: 1 }}
                  >
                    <span class="">14</span>
                  </div>
                  Requests
                </div>
              </div>
              <nav class="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700 ">
                <div
                  role="button"
                  tabindex="0"
                  class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                >
                  <div class="grid place-items-center mr-4 ">
                    <img src={messengerpp} alt="profilepic"></img>
                  </div>
                  <div>
                    <p className="text-sm">Cokemaina Dashain-Ti..</p>
                    <span className="text-xs text-gray-400">
                      You : Thanks hiroshi
                    </span>
                  </div>
                </div>
                <div
                  role="button"
                  tabindex="0"
                  class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                >
                  <div class="grid place-items-center mr-4 ">
                    <img src={messengerpp2} alt="profilepic"></img>
                  </div>
                  <div>
                    <p className="text-sm">Cokemaina Dashain-Ti..</p>
                    <span className="text-xs text-gray-400">
                      Riyasha: Can you send more pictures?{" "}
                    </span>
                  </div>
                </div>

                <div
                  role="button"
                  tabindex="0"
                  class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                >
                  <div class="grid place-items-center mr-4 ">
                    <img src={messengerpp3} alt="profilepic"></img>
                  </div>
                  <div>
                    <p className="text-sm">Cokemaina Dashain-Ti..</p>
                    <span className="text-xs text-gray-400">
                      You: Correct the hashtag.{" "}
                    </span>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandChat;
