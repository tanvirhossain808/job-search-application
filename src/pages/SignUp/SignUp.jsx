import "./SignUp.css";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { auth } from "../../firebase/firebase.config";

//
// const [email, setEmail] = useState("");

//
export const SignUp = () => {
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, userGit, loadingGit, errorGit] =
    useSignInWithGithub(auth);

  console.log(import.meta.env.VITE_SOME_A_API_KEY);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  console.log(userInfo);

  const hadleCreaseUserWithEmailAndPass = (e) => {
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    e.preventDefault();
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
