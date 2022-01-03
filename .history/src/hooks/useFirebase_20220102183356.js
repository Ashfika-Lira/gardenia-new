import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  getIdToken,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import FirebaseInit from "../";

FirebaseInit()

const useFirebase = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState("");
  const [errorCode, setErrorCode] = useState();
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState();

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const registerUser = (email, password, name, navigation) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        // Signed in
        const newUser = { email, displayName: name };
        setUser(newUser);
        //  Save User to database
        saveUserToDatabase(email, name);
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
       navigation("/home");
      })
      .catch((error) => {
        setAuthError(error.message);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  //////////////////////////// Sign in with user and pass //////////////////////////
  const loginUser = (email, password, location, navigation) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/home";
        navigation(destination);
        setAuthError("");
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        setErrorCode(errorCode);
        const errorMessage = error.message;
        setAuthError(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  /////////////////////// Sign in With Google ////////////////////////////
  const signInWithGoogle = (location, navigation) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveGoogleUserToDatabase(user.email, user.displayName);
        setAuthError("");
        const destination = location?.state?.from || "/dashboard";
        navigation(destination);
      })
      .catch((error) => {
        const errorCode = error.code;
        setErrorCode(errorCode);
        const errorMessage = error.message;
        setAuthError(errorMessage);
        const email = error.email;
        console.log(email);
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  /////////////////////// Sign in With Google ////////////////////////////
  const signInWithGithub = (location, navigation) => {
    setIsLoading(true);
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        saveGithubUserToDatabase(user.email, user.displayName);
        setAuthError("");
        const destination = location?.state?.from || "/dashboard";
        navigation.replace(destination);
      })
      .catch((error) => {
        const errorCode = error.code;
        setErrorCode(errorCode);
        const errorMessage = error.message;
        setAuthError(errorMessage);
        const email = error.email;
        console.log(email);
        const credential = GithubAuthProvider.credentialFromError(error);
        console.log(credential);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  ////////////////////////////////////////////////////
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => {
          setToken(idToken);
          // console.log(idToken);
        });
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  /////////////////////// Check Admin and   Admin Data Load  //////////////////////
  useEffect(() => {
    fetch(`https://fathomless-shelf-34125.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  ////////////////////////// Log-out  From Ui  /////////////////////////////
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  ////////////////////////// Save User To database //////////////////////////////

  const saveUserToDatabase = (email, displayName) => {
    const user = { email, displayName };
    fetch("https://fathomless-shelf-34125.herokuapp.com/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };
  ///////////////////////////////////////////////////////////////////////////

  ///////////////////////// Save Google User To database   ////////////////////////////////
  const saveGoogleUserToDatabase = (email, displayName) => {
    const user = { email, displayName };
    fetch("https://fathomless-shelf-34125.herokuapp.com/users", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };
  ////////////////////////////////////////////////////////////////////////////
  ///////////////////////// Save Google User To database   ////////////////////////////////
  const saveGithubUserToDatabase = (email, displayName) => {
    const user = { email, displayName };
    fetch("https://fathomless-shelf-34125.herokuapp.com/users", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };
  ////////////////////////////////////////////////////////////////////////////
  return {
    user,
    admin,
    token,
    authError,
    errorCode,
    isLoading,
    loginUser,
    registerUser,
    signInWithGoogle,
    logOut,
    signInWithGithub,
  };
};

export default useFirebase;
