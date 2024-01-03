import "./SignUp.css";

import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.config";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
export const SignUp = () => {
  const namePattern = /^[A-Za-z]+$/;

  const naviGate = useNavigate();
  const [authUser, authLoading, authError] = useAuthState(auth);
  const [updateProfile, updatingUser, updatingError] = useUpdateProfile(auth);
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, userGit, loadingGit, errorGit] =
    useSignInWithGithub(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  // console.log(userInfo);
  useEffect(() => {
    if (authUser) {
      Swal.fire({
        title: "Successfully login",
        text: "press ok to proceed!",
        icon: "success",
      });
      naviGate("/");
    }
  }, [authUser]);

  const hadleCreaseUserWithEmailAndPass = async (e) => {
    e.preventDefault();
    const fullName = userInfo.firstName + userInfo.lastName;
    const isValidFirstName = namePattern.test(userInfo.firstName);
    const isValidLastName = namePattern.test(userInfo.lastName);

    if (!isValidFirstName || !isValidLastName) {
      // Handle the error, e.g., display a message or prevent form submission
      return toast.warn("Please give valid name!", {
        position: toast.POSITION.TOP_CENTER,
      });
      // console.error("Error: Invalid characters in first name or last name");
      // return;
    }

    if (userInfo.password !== userInfo.confirmPassword) {
      toast.warn("password doesn't match !", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    await createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    const success = await updateProfile({ displayName: fullName });
    if (success) {
      ("");
    }

    console.log(user);
    console.log(error);
    if (error) {
      return (
        <div>
          <p>Error: {error.message}</p>
        </div>
      );
    }
    if (loading) {
      return <p>Loading...</p>;
    }
    console.log();
    if (user) {
      ("");
    }
    //
  };
  const handleSignWithGoogle = () => {
    signInWithGoogle();
  };
  const handleSignWithGitHub = () => {
    signInWithGithub();
  };
  return (
    <>
      <div className="formBody">
        <div className="container">
          <button className="button" onClick={handleSignWithGoogle}>
            <FaGoogle size={30} fill="red" />

            <p>Sign in with Google</p>
          </button>
          <button className="button" onClick={handleSignWithGitHub}>
            <FaGithub size={30} />

            <p>Sign in with Github</p>
          </button>
          <p>or</p>
          <form className="form" onSubmit={hadleCreaseUserWithEmailAndPass}>
            <input
              required
              type="text"
              name="firstName"
              placeholder="Type your first name"
              size="22"
              value={userInfo.firstName}
              onChange={(e) =>
                setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Type your last name"
              name="lastName"
              required
              value={userInfo.lastName}
              onChange={(e) =>
                setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
              }
              size="22"
            />
            <input
              type="email"
              placeholder="Type your email"
              name="email"
              required
              value={userInfo.email}
              onChange={(e) =>
                setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
              }
              size="22"
            />
            <input
              type="password"
              value={userInfo.password}
              placeholder="Type your password"
              required
              onChange={(e) =>
                setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
              }
              name="password"
              size="22"
            />
            <input
              type="password"
              required
              value={userInfo.confirmPassword}
              placeholder="Confirm password"
              name="confirmPassword"
              onChange={(e) =>
                setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
              }
              size="22"
            />
            <button type="submit">Sign up</button>
          </form>
          <p id="signup">
            Do nt have an account ? <a href="#">Sign up</a>
          </p>
        </div>
      </div>
    </>
  );
};
