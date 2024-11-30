import React, { useEffect, useState } from "react";
import { logo_url } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { setLanguage } from "../utils/languageSlice";
import { translations } from "../utils/constants";
import { toggleShowGptSearch } from "../utils/gptSlice";
import { HiMenu } from "react-icons/hi"; 

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const selectedLanguage = useSelector((store) => store.lang?.currentLanguage);
  const showGPT = useSelector((store) => store.gpt?.showGptSearch);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const handleCurrentLanguage = (e) => {
    dispatch(setLanguage(e.target.value));
  };

  const handleGptToggle = () => {
    dispatch(toggleShowGptSearch());
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        navigate("/");
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unSubscribe();
  }, [dispatch, navigate]);

  return (
    <div className="fixed top-0 left-0 w-full p-2 bg-gradient-to-b from-black to-transparent z-50 flex justify-between items-center transition-all">
      <div>
        <img src={logo_url} alt="Logo" className="w-32 md:w-40" />
      </div>
      <div className="flex items-center space-x-5">
        {user ? (
          <>
            <div className="hidden md:flex space-x-5">
              <button
                className="border border-white-300 bg-transparent rounded-md text-white p-2 focus:outline-none focus:ring-2"
                onClick={handleGptToggle}
              >
                {showGPT
                  ? translations[selectedLanguage].homePage
                  : translations[selectedLanguage].gptSearch}
              </button>
              <select
                className="border border-white-300 bg-black rounded-md text-white p-2 focus:outline-none focus:ring-2"
                onChange={handleCurrentLanguage}
              >
                <option value="en">En</option>
                <option value="hi">हिं</option>
                <option value="te">తె</option>
              </select>
              <button
                className="bg-black-600 border border-white-300 text-white px-8 rounded-md hover:bg-black-10 hover:text-white transition"
                onClick={handleSignOut}
              >
                {translations[selectedLanguage].logout}
              </button>
            </div>
            <div className="md:hidden">
              <HiMenu
                size={30}
                className="text-white cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            </div>
          </>
        ) : (
          <div></div>
        )}
      </div>
      {isMenuOpen && (
        <div className="absolute top-14 right-4 bg-black bg-opacity-30 border items-center justify-center border-white text-white rounded-md p-4 shadow-lg flex flex-col space-y-4 md:hidden">
          <button
            className="bg-transparent rounded-md text-white p-2 focus:outline-none focus:ring-2"
            onClick={handleGptToggle}
          >
            {showGPT
              ? translations[selectedLanguage].homePage
              : translations[selectedLanguage].gptSearch}
          </button>
          <select
            className=" bg-black rounded-md text-white cursor-pointer w-14 p-2 focus:outline-none focus:ring-2"
            onChange={handleCurrentLanguage}
          >
            <option value="en">En</option>
            <option value="hi">हिं</option>
            <option value="te">తె</option>
          </select>
          <button
            className="bg-black-600 text-white px-8 rounded-md hover:bg-black-10 hover:text-white transition"
            onClick={handleSignOut}
          >
            {translations[selectedLanguage].logout}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
