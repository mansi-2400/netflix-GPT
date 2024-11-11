import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { removeUser } from "../utils/userInfoSlice";

const UserProfile = () => {
  const [toggle, setToggle] = useState(false);
  const selector = useSelector((store) => store.UserInfo);
  const favSelctor = useSelector((store) => store.MoviesSlice?.favouriteMovies);
  const dispatch = useDispatch();
  const watchLaterSelector = useSelector(
    (store) => store.MoviesSlice?.watchLaterMovies
  );
  const navigate = useNavigate();

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleNavigateFav = () => {
    console.log("Clicked");
    if (favSelctor.length > 0) navigate("/favouriteMovies");
  };

  const handleNavWatchLater = () => {
    if (watchLaterSelector.length > 0) navigate("/watchLater");
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="relative flex flex-col">
        <div className="flex flex-row items-center align-middle border
        md:bg-inherit bg-red-700 border-red-600 rounded-md p-1">
          <p className="m-1 md:text-xl md:hover:bg-fuchsia-600 ">Hello, {selector?.displayName} </p>
          <svg
            className="h-8 w-8 text-red-400 cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={handleToggle}
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <circle cx="12" cy="12" r="1" />
            <circle cx="12" cy="19" r="1" />
            <circle cx="12" cy="5" r="1" />
          </svg>
        </div>

        {toggle && (
          <ul
            className="absolute right-0 mt-10 md:w-48 w-36 shadow-lg rounded-lg md:py-2
            text-white bg-red-800 ">

            <li
              className="px-4 md:py-2 py-1 hover:bg-slate-500 cursor-pointer text-lg "
              onClick={handleNavigateFav}>
              Favourites {favSelctor.length ? " - " + favSelctor.length : ""}
            </li>
            <hr/>
            <li
              className="px-4  md:py-2 py-1 hover:bg-slate-500 cursor-pointer"
              onClick={handleNavWatchLater}>
              Watch Later
              {watchLaterSelector.length
                ? " - " + watchLaterSelector.length
                : ""}
            </li>
              <hr className = "bg-slate-600"/>
            <li
              className="px-4 py-2 hover:bg-slate-500 cursor-pointer flex flex-row justify-between "
              onClick={handleSignOut}>
              Sign Out
              <svg class="h-6 w-6 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />  <path d="M7 12h14l-3 -3m0 6l3 -3" /></svg>            </li>
            
          </ul>
        )}
      </div>
    </>
  );
};

export default UserProfile;
