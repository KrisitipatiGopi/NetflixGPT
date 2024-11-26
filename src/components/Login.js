import React, { useRef, useState } from "react";
import { checkValidData } from "../utils/Validate";

const logo_url =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
const background_url =
  "https://assets.nflxext.com/ffe/siteui/vlv3/4690cab8-243a-4552-baef-1fb415632f74/web/IN-en-20241118-TRIFECTA-perspective_0b813abc-8365-4a43-a9d8-14c06e84c9f3_small.jpg";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

  }

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
        <img src={logo_url} alt="Netflix Logo" className="w-40 md:w-60" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col justify-center bg-black w-11/12 md:w-4/12 gap-8 p-8 rounded-md bg-opacity-80 shadow-lg">
          <h1 className="text-white text-3xl font-bold mb-4">
            {isLoggedIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isLoggedIn && (
            <input
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
