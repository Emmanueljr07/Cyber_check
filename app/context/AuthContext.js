"use client";

import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
// import { cookies } from "next/headers";
// import { SignJWT, jwtVerify } from "jose";

// const secretKey = process.env.NEXT_PUBLC_SECRET_KEY;
// const key = new TextEncoder().encode(secretKey);

const initialState = {
  currentUser: null,
  openAddMember: false,
  openDialog: false,
  loading: false,
  alert: { open: false, severity: "info", message: "" },
  viewStudent: null,
  users: [],
  students: [],
  profile: { open: false },
  editRow: { open: false, row: null },
  deleteDialog: { open: false, row: null },
  edit: null,
  mode: "light",
};

const Context = createContext(initialState);

export const useValue = () => {
  return useContext(Context);
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const storedMode = localStorage.getItem("mode");
  // const [mode] = useState(storedMode === "dark" ? "dark" : "light");
  // const [user, setUser] = useState(null);
  // const userSession = sessionStorage.getItem("user");

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    // const mode = localStorage.getItem("mode");

    if (currentUser) {
      dispatch({ type: "UPDATE_USER", payload: currentUser });
    }
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default ContextProvider;

export function useAuth() {
  return useContext(Context);
}
