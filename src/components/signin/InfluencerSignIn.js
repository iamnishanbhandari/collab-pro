import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/firebaseConfig";
import NavBar from "../landingpage/navbar/NavBar";
import light from "../../assets/light.png";

const InfluencerSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSignIn = async (e) => {
    e.preventDefault();

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/InfluencerDashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  //   try {
  //     await signInWithEmailAndPassword(auth, email, password);
  //     console.log("Sign-in successful!");
  //     navigate("/");
  //   } catch (error) {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     console.error("Authentication error:", errorCode, errorMessage);
  //   }
  // };

  return (
    <>
      {/* <div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button onClick={onSignIn}>Login</button>
        </div>
        <div>
          No account
          <Link to="/SignUp">
            <button>Signup</button>
          </Link>
        </div>
      </div> */}

      <NavBar />
      {/* <div className="flex justify-evenly "> */}
      <div className="  flex  justify-center  h-[100vh] ">
        <div
          className=" h-500  w-96 m-auto mt-26 
   bg-blue-100 bg-opacity-75 backdrop-blur-10 p-4 rounded-2xl
        "
        >
          <form>
            <div className="">
              <div className="text-red-800 p-2 ">Email</div>
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-solid border-gray-500 w-72 outline-none h-8 rounded-xl text-start p-4  "
                />
              </div>
            </div>

            <div>
              <div className="text-red-800 p-2">Password</div>
              <div>
                <input
                  className="border border-solid border-gray-500 w-72 outline-none h-8 rounded-xl text-start p-4  "
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="">
              <button
                type="submit"
                className="bg-blue-700 text-white border-red-799 w-36 rounded-xl h-8 mt-6"
                onClick={onSignIn}
              >
                Sign in
              </button>
            </div>

            <div className="mt-4">
              Create account ??
              <Link to={"/signup"}>
                <button className="text-gray-600"> sign up</button>
              </Link>
            </div>
          </form>
        </div>
        <div className="margin-auto pt-24  text-center ">
          {/* <p className="text-5xl text-yellow-600">
            CONNECTING You TO The Right <br /> Voices
          </p> */}
          <img src={light} height={110}></img>
        </div>
      </div>
      {/* 
        <div className="border border-green-600">
          <img src={light} alt="image"></img>
        </div>
      </div> */}
    </>
  );
};
export default InfluencerSignIn;
