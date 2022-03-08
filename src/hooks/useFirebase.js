import { useEffect, useState } from "react";
import initializeFirebase from "../components/Home/LoginForm/Firebase/firebase.init";
import {
 getAuth,
 createUserWithEmailAndPassword,
 signInWithEmailAndPassword,
 signOut,
 onAuthStateChanged,
 GoogleAuthProvider,
 signInWithPopup,
} from "firebase/auth";

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
 const [user, setUser] = useState({});
 const [isLoading, setIsLoading] = useState(true);
 const [authError, setAuthError] = useState("");

 const auth = getAuth();
 const googleProvider = new GoogleAuthProvider();

 const registerUser = (email, password) => {
  setIsLoading(true);
  createUserWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
    setAuthError("");
   })
   .catch((error) => {
    setAuthError(error.message);
   })
   .finally(() => setIsLoading(false));
 };

 const loginUser = (email, password) => {
  setIsLoading(true);
  signInWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
    setAuthError("");
   })
   .catch((error) => {
    setAuthError(error.message);
   })
   .finally(() => setIsLoading(false));
 };

 //  google sign in with google
 const signInWithGoogle = () => {
  setIsLoading(true);
  signInWithPopup(auth, googleProvider)
   .then((result) => {
    const user = result.user;
    setAuthError("");
   })
   .catch((error) => {
    setAuthError(error.message);
   })
   .finally(() => setIsLoading(true));
 };

 // observe user state
 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
   if (user) {
    setUser(user);
   } else {
    setUser({});
   }
   setIsLoading(false);
  });
  return () => unsubscribe;
 }, []);

 const logOut = () => {
  setIsLoading(true);
  signOut(auth)
   .then(() => {
    // Sign-out successful.
   })
   .catch((error) => {
    // An error happened.
   })
   .finally(() => setIsLoading(false));
 };

 return {
  user,
  isLoading,
  registerUser,
  logOut,
  loginUser,
  authError,
  signInWithGoogle,
 };
};

export default useFirebase;
