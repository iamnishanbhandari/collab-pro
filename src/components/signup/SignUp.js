import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/SignIn");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });

    // try {
    //   const userCredential = await createUserWithEmailAndPassword(
    //     auth,
    //     email,
    //     password
    //   );
    //   const user = userCredential.user;
    //   console.log(user);
    //   navigate("/SignIn");
    // } catch (error) {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   console.error(errorCode, errorMessage);
    // }
  };

  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <label>
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>

          <div>
            <label>
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>

          <div>
            <button type="submit">Sign up</button>
          </div>

          <div>
            Have account ??
            <Link to={"/signIn"}>
              <button>sign in</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
