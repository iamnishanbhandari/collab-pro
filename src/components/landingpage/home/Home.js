import { Link } from "react-router-dom";
import OBJECTS from "../../../assets/OBJECTS.png";

export default function Home() {
  return (
    <>
      <div>
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="flex justify-evenly content-center text-center item-center m-20">
            <div className="flex flex-col">
              <div className="text-6xl">
                <p className="  p-1 font-light ">
                  Connecting you to the right <br /> Voices
                </p>
              </div>

              <div className="w-auto text-2xl mt-12 text-start text-yellow-700">
                Collab-Pro bridges the gap between influences and brands, <br />{" "}
                offering a seamless platform for collaboration, marketing,{" "}
                <br /> and brand building . Discover the power of partnership
                today.
              </div>

              <div className="mt-20 flex justify-center w-auto">
                <Link to={"/Signin"}>
                  <div className="flex  border-solid border-blue-700">
                    <button className="rounded-3xl bg-blue-700 font-semibold text-white py-3 pr-12 pl-12 hover:bg-blue-900">
                      For Influencer
                    </button>
                  </div>
                </Link>

                <Link to={"/BrandSignin"}>
                  <div className=" border-solid border-blue-700">
                    <button className=" rounded-3xl border border-solid border-blue-800 text-blue-900 font-semibold ml-2 py-3 pr-12 pl-12 hover:text-bold">
                      For Brand
                    </button>
                  </div>
                </Link>
              </div>
            </div>
            <div className="mt-10">
              <img src={OBJECTS}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
