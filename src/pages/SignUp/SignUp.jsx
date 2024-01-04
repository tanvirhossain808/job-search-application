import "./SignUp.css";

import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
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
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Error } from "../Error/Error";
import { Example } from "../../components/Loading/Loading";
export const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [error2, setError] = useState({});
  const [signInWithEmailAndPassword, userSignIn, loadingSign, errorSign] =
    useSignInWithEmailAndPassword(auth);
  const [signIn, setSignIn] = useState(false);
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
  if (userGoogle) {
    console.log(from);
    navigate(from, { replace: true });
    toast.success(`Log In Successfully`, {
      toastId: "success1",
    });
  }

  useEffect(() => {
    setError(authError || errorSign);
  }, [authError || errorSign]);

  const hadleCreaseUserWithEmailAndPass = async (e) => {
    e.preventDefault();
    const fullName = userInfo.firstName + userInfo.lastName;
    const isValidFirstName = namePattern.test(userInfo.firstName);
    const isValidLastName = namePattern.test(userInfo.lastName);

    {
      !signIn && (!isValidFirstName || !isValidLastName)
        ? // Handle the error, e.g., display a message or prevent form submission
          (toast.warn("Please give valid name!", {
            position: toast.POSITION.TOP_CENTER,
          }),
          null) // Returning null to render nothing
        : null;
    }

    {
      !signIn && userInfo.password !== userInfo.confirmPassword
        ? // Handle the error, e.g., display a message or prevent further actions
          (toast.warn("Password doesn't match!", {
            position: toast.POSITION.TOP_CENTER,
          }),
          null)
        : null;
    }

    {
      !signIn
        ? await createUserWithEmailAndPassword(
            userInfo.email,
            userInfo.password
          )
        : await signInWithEmailAndPassword(userInfo.email, userInfo.password);
    }
    setError(errorSign);
    {
      !signIn && (await updateProfile({ displayName: fullName }));
    }

    if (loading) {
      return <p>Loading...</p>;
    }
    //
  };
  if (authUser) {
    console.log(from);
    navigate(from, { replace: true });
    toast.success(`Log In Successfully`, {
      toastId: "success1",
    });
  }
  const handleSignWithGoogle = async () => {
    await signInWithGoogle();
  };
  const handleSignWithGitHub = () => {
    signInWithGithub();
  };
  console.log(authLoading);
  return (
    <>
      {authLoading ? (
        <Example></Example>
      ) : (
        <div>
          {loading ? <p>loading...</p> : ""}
          {error2 ? (
            <Error error={error2}></Error>
          ) : (
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
                <form
                  className="form"
                  onSubmit={hadleCreaseUserWithEmailAndPass}
                >
                  {signIn ? (
                    ""
                  ) : (
                    <input
                      required
                      type="text"
                      name="firstName"
                      placeholder="Type your first name"
                      size="22"
                      value={userInfo.firstName}
                      onChange={(e) =>
                        setUserInfo({
                          ...userInfo,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  )}
                  {signIn ? (
                    ""
                  ) : (
                    <input
                      type="text"
                      placeholder="Type your last name"
                      name="lastName"
                      required
                      value={userInfo.lastName}
                      onChange={(e) =>
                        setUserInfo({
                          ...userInfo,
                          [e.target.name]: e.target.value,
                        })
                      }
                      size="22"
                    />
                  )}
                  <input
                    type="email"
                    placeholder="Type your email"
                    name="email"
                    required
                    value={userInfo.email}
                    onChange={(e) =>
                      setUserInfo({
                        ...userInfo,
                        [e.target.name]: e.target.value,
                      })
                    }
                    size="22"
                  />
                  <input
                    type="password"
                    value={userInfo.password}
                    placeholder="Type your password"
                    required
                    onChange={(e) =>
                      setUserInfo({
                        ...userInfo,
                        [e.target.name]: e.target.value,
                      })
                    }
                    name="password"
                    size="22"
                  />
                  {signIn ? (
                    ""
                  ) : (
                    <input
                      type="password"
                      required
                      value={userInfo.confirmPassword}
                      placeholder="Confirm password"
                      name="confirmPassword"
                      onChange={(e) =>
                        setUserInfo({
                          ...userInfo,
                          [e.target.name]: e.target.value,
                        })
                      }
                      size="22"
                    />
                  )}
                  <button type="submit">
                    {signIn ? "Sign In" : "Sign Up"}
                  </button>
                </form>
                <Link onClick={() => setSignIn(!signIn)}>
                  {signIn ? (
                    <>Don't have an account?</>
                  ) : (
                    <>You already have an account?</>
                  )}
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
