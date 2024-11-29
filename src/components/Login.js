import React, { useRef, useState } from "react";
import { checkValidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import Header from "./Header";
import { background_url } from "../utils/constants";



const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const name = useRef(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isLoggedIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          console.log(user);
        })
        .catch((error) => {
          const error1 = error.message;
          setErrorMessage(error1);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          //console.log(user);
        })
        .catch((error) => {
          const error1 = error.message;
          setErrorMessage(error1);
        });
    }
  };

  const handleSignIn = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background_url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
      className="flex flex-col"
    >
      <div className="mx-12 mt-8">
        <Header />
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col justify-center mt-32 bg-black w-11/12 md:w-4/12 gap-8 p-8 rounded-md bg-opacity-80 shadow-lg"
        >
          <h1 className="text-white text-3xl font-bold mb-4">
            {isLoggedIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isLoggedIn && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-700"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder={isLoggedIn ? "Enter Email" : "Email Address"}
            className="p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-700"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-700"
          />
          <p className="text-red-600 font-semibold mx-4">{errorMessage}</p>
          <button
            type="submit"
            className="bg-red-700 text-white font-bold p-3 rounded-md hover:bg-red-800 transition duration-300"
            onClick={handleButtonClick}
          >
            {isLoggedIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-white text-sm text-center mt-4">
            {isLoggedIn ? "New to Netflix?" : "Already have an account?"}{" "}
            <span
              onClick={handleSignIn}
              className="font-bold cursor-pointer text-red-600"
            >
              {isLoggedIn ? "Sign Up" : "Sign In"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
