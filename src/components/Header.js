import React, { useEffect } from "react";
import { logo_url } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/");
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unSubscribe();
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full p-2 flex justify-between items-center ${
        user ? "bg-black" : "bg-transparent"
      } ${user ? "w-full" : "w-auto mx-auto"} z-50`}
    >
      <div>
        <img src={logo_url} alt="logo" className="w-32" />
      </div>
      {user && (
        <div>
          <button
            className="bg-red-700 text-white p-2 font-bold rounded-md"
            onClick={handleSignOut}
          >
            LogOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
