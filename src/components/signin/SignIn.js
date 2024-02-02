import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/firebaseConfig";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSignIn = async (e) => {
    e.preventDefault();

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/");
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
      <div>
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
      </div>
    </>
  );
};
export default SignIn;
