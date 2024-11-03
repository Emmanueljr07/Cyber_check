import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  // GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import auth from "../firebase/config";

export const Register = async (email, password, dispatch) => {
  dispatch({ type: "START_LOADING" });
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    console.log(res);
    if (res) {
      dispatch({ type: "UPDATE_USER", payload: res });
      // sessionStorage.setItem("user", JSON.stringify(res?.user));
    } else {
      alert("Credentials are incorrect");
    }
    dispatch({ type: "CLOSE_DIALOG" });
  } catch (error) {
    console.log(error);
  }
};

export const Login = async (email, password, dispatch) => {
  dispatch({ type: "START_LOADING" });
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    console.log(res);
    if (res) {
      dispatch({ type: "UPDATE_USER", payload: res });
      // sessionStorage.setItem("user", JSON.stringify(res?.user));
    } else {
      alert("Credentials are incorrect. Try again!!");
    }
    dispatch({ type: "CLOSE_DIALOG" });
  } catch (error) {
    console.log(error);
  }
};

export const signInGoogle = async (provider, dispatch) => {
  dispatch({ type: "START_LOADING" });
  // const provider = new GoogleAuthProvider();
  try {
    const res = await signInWithPopup(auth, provider);
    console.log("Google SIgn OK", res);
    if (res) {
      dispatch({ type: "UPDATE_USER", payload: res });
      // sessionStorage.setItem("user", JSON.stringify(res?.user));
    } else {
      alert("Something happened are incorrect");
    }
    dispatch({ type: "CLOSE_DIALOG" });
  } catch (error) {
    console.error("Error signing with Google", error);
  }
};

export const logOut = () => {
  dispatch({ type: "UPDATE_USER", payload: null });
  // sessionStorage.removeItem("user");
  return signOut(auth);
};
