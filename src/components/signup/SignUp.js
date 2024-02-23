import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../landingpage/navbar/NavBar";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);
        navigate("/SignIn");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <NavBar />
      <div className="border flex flex-col justify-center h-[100vh]">
        <div className="margin-auto pt-24 text-center"></div>
        <div className="h-500 w-96 m-auto mt-26 bg-blue-100 bg-opacity-75 backdrop-blur-10 p-4 rounded-2xl">
          <form onSubmit={onSubmit}>
            {/* Name Input */}
            <div className="">
              <div className="text-red-800 p-2 " id="username">
                Name
              </div>
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border border-solid border-gray-500 w-72 outline-none h-8 rounded-xl text-start p-4"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="">
              <div className="text-red-800 p-2 ">Email</div>
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-solid border-gray-500 w-72 outline-none h-8 rounded-xl text-start p-4"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <div className="text-red-800 p-2">Password</div>
              <div>
                <input
                  className="border border-solid border-gray-500 w-72 outline-none h-8 rounded-xl text-start p-4"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="bg-blue-700 text-white border-red-799 w-36 rounded-xl h-8 mt-6"
              >
                Sign up
              </button>
            </div>

            <div className="mt-4">
              Already have an account ?{" "}
              <Link to={"/BrandSignIn"} className="text-gray-600">
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
