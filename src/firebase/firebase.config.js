import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  // import.meta.env.VITE_SOME_KEY
  apiKey: import.meta.env.VITE_SOME_A_API_KEY,
  authDomain: import.meta.env.VITE_SOME_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_SOME_PROJECT_ID,
  storageBucket: import.meta.env.VITE_SOME_STRONGeBUCket,
  messagingSenderId: import.meta.env.VITE_SOME_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_SOME_APPID,
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
