import React, { useState, useRef } from "react";
import { LOGIN_BG_IMG } from "../utils/constants";
import Header from "./Header";
import { validateData } from "../utils/validateData";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userInfoSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignUP, setIsSignUP] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const email = useRef();
  const password = useRef();
  const name = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsSignUP(!isSignUP);
    setErrorMsg(null); // Clear error message when toggling between sign in and sign up
  };

  const handleAction = () => {
    // Validate email and password
    const message = validateData(email.current.value, password.current.value);
    if (message) {
      setErrorMsg(message); // Display validation errors
      return;
    }

    // Clear previous error messages before new attempt
    setErrorMsg(null);

    if (isSignUP) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // User created successfully
          const user = userCredential.user;
          if (name.current.value === null) return setErrorMsg("Name is required");
          return updateProfile(user, {
            displayName: name.current.value,
          });
        })
        .then(() => {
          const { uid, displayName, email } = auth.currentUser;
          dispatch(
            addUser({ uid: uid, email: email, displayName: displayName })
          );
          navigate("/browse");
        })
        .catch((error) => {
          handleFirebaseErrors(error);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in successfully
          const user = userCredential.user;
          const { uid, displayName, email } = auth.currentUser;

          dispatch(
            addUser({ uid: uid, email: email, displayName: displayName })
          );
          console.log("Dispatch successfull");

          navigate("/browse");
        })
        .catch((error) => {
          handleFirebaseErrors(error);
        });
    }
  };

  const handleFirebaseErrors = (error) => {
    const errorCode = error.code;

    // Custom error messages based on Firebase error codes
    switch (errorCode) {
      case "auth/wrong-password":
        setErrorMsg("Incorrect password. Please try again.");
        break;
      case "auth/user-not-found":
        setErrorMsg("No account found with this email. Please sign up.");
        break;
      case "auth/email-already-in-use":
        setErrorMsg(
          "Email is already in use. Please use a different email or sign in."
        );
        break;
      case "auth/invalid-email":
        setErrorMsg("Invalid email format. Please enter a valid email.");
        break;
      case "auth/weak-password":
        setErrorMsg("Password should be at least 6 characters long.");
        break;
      default:
        setErrorMsg(error.message); // Display the default Firebase error message
        break;
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={LOGIN_BG_IMG}
          alt="login-bg-color"
          className="bg-gradient-to-b from-black h-screen object-cover md:w-screen"
        />
      </div>

      <div className="">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute md:w-4/12 mx-auto my-24  text-white p-9
        text-center right-0 left-0 bg-opacity-70 bg-black"
        >
          <div className="text-left mx-3 ">
            <label className="text-white text-3xl ">
              {isSignUP ? "Sign Up" : "Sign In"}
            </label>
          </div>
          <br />
          {isSignUP && (
            <>
              <input
                required
                ref={name}
                type="text"
                placeholder="Enter full name"
                className="p-2 my-3 w-full font-normal bg-gray-700 border-white rounded-md"
              />
              <br />
            </>
          )}
          <input
            ref={email}
            type="text"
            placeholder="Enter email"
            className="p-2 my-3 w-full font-normal bg-gray-700 border-white rounded-md"
            onChange={() => setErrorMsg(null)} // Clear error when user starts typing
          />
          <div className="relative w-full">
            <input
              ref={password}
              type={isPasswordVisible ? "text" : "password"} // Toggle between password and text
              placeholder="Enter password"
              className="p-2 my-2 w-full font-normal bg-gray-700 border-white rounded-md text-black"
              onChange={() => setErrorMsg(null)} // Clear error when user starts typing
            />
            <span
              onClick={() => setIsPasswordVisible(!isPasswordVisible)} // Toggle password visibility
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-red-500"
            >
              {isPasswordVisible ? (
                <svg className="h-8 w-8 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />  <circle cx="12" cy="12" r="3" /></svg>// Eye open (Password visible)
              ) : (
                <svg className="h-8 w-8 text-red-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round"  strokeLinejoin = "round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
              </svg>
              // Eye closed (Password hidden)
              )}
            </span>
          </div>

          {errorMsg && (
            <p className="text-red-700 font-bold text-lg text-left">
              {errorMsg}
            </p>
          )}
          <button
            className="bg-red-700 p-4 my-2 w-full rounded-md"
            onClick={handleAction}
          >
            {isSignUP ? "Sign up" : "Sign In"}
          </button>

          <br />
          <p
            className="font-light text-left my-3 py-2 cursor-pointer"
            onClick={handleToggle}
          >
            {isSignUP
              ? "Already registered? Sign In"
              : "New to Netflix? Sign up"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
