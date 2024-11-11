import React, { useEffect } from "react";
import { NETFLIX_LOGO } from "../utils/constants";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { gptToggleView } from "../utils/gptToggleSlice";
import { langConstants } from "../utils/langConstants";
import { changeLanguage } from "../utils/langSlice";
import UserProfile from "./UserProfile";
import Options from "./Options";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  const selector = useSelector((store) => store.UserInfo);
  const gptToggleSelector = useSelector(
    (store) => store.GptToggle?.showGptView
  );

  const location = useLocation();

  const favSelctor = useSelector((store) => store.MoviesSlice?.favouriteMovies);
  const watchLaterSelector = useSelector(
    (store) => store.MoviesSlice?.watchLaterMovies
  );

  const handleGptToggle = () => {
    dispatch(gptToggleView());
  };

  // const handleLanguageChange = (e) => {
  //   dispatch(changeLanguage(e.target.value));
  // };


  useEffect(() => {
    if (!selector) navigate("/");
  }, [selector]);

  const handleImageClick = () => {
    setToggle(!toggle);
  };
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const { uid, email, displayName } = user;
  //       dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
  //       navigate("/browse");
  //     } else {
  //       dispatch(removeUser());
  //       navigate("/");
  //     }
  //   });

  //   return () => unsubscribe();
  // }, []);
  if (!favSelctor) return;
  if (!watchLaterSelector) return;
  return (
    <>
    <div
      className="absolute z-20 w-screen 
        items-center flex flex-col md:flex-row justify-center
        md:justify-between overscroll-y-none bg-gradient-to-b  from-black cursor-pointer"
    >
      <img
        className="pl-6 w-44 "
        src={NETFLIX_LOGO}
        alt="netflix-logo"
        onClick={handleImageClick}
      />

      {selector && (
        <div className="flex flex-row justify-evenly md:justify-end z-10 text-white md:mr-8 items-center">
          {location.pathname !== "/favouriteMovies" &&
            location.pathname !== "/watchLater" && (
              <button
                className="bg-purple-800 text-white px-4 m-2 py-2 rounded-lg"
                onClick={handleGptToggle}
              >
                {gptToggleSelector ? "HOME" : "GPT Search"}
              </button>
            )}

          <UserProfile />
        </div>
      )}

    </div>
   {toggle && <Options />}

    </>
  );
};

export default Header;
