"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GoogleAuthProvider } from "firebase/auth";
import Image from "next/image";
import { Login, signInGoogle } from "../api/user";
import { useValue } from "../context/AuthContext";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const {
    state: { currentUser },
    dispatch,
  } = useValue();

  useEffect(() => {
    {
      if (currentUser) {
        router.replace("/dashboard");
      }
    }
  }, [currentUser, router]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const login = await Login(email, password, dispatch);
    console.log(login);
    setEmail("");
    setPassword("");
    router.replace("/dashboard");
    return login;
    // try {
    //   const res = await signInWithEmailAndPassword(email, password);
    //   console.log(res);
    //   sessionStorage.setItem("user", "true");
    //   setEmail("");
    //   setPassword("");
    //   router.push("/");
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    const done = await signInGoogle(provider, dispatch);
    console.log(done);
    router.replace("dashboard");
    return done;
    // try {
    //   const res = await signInWithPopup(auth, provider);
    //   console.log(res);
    //   sessionStorage.setItem("user", JSON.stringify(res?.user));
    //   router.push("/");
    // } catch (error) {
    //   console.error("Error signing with Google", error);
    // }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Sign In</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
              className="w-full mt-1 p-3 bg-gray-700 text-gray-100 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
              className="w-full mt-1 p-3 bg-gray-700 text-gray-100 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md transition duration-200"
          >
            Sign In
          </button>
        </form>

        {/* Signup with Google Btn */}
        <div className="w-full py-3 mt-4 bg-indigo-600 hover:bg-gray-700 text-white font-semibold rounded-md transition duration-200 flex justify-center ">
          <button
            className="flex justify-center items-center"
            onClick={handleGoogleSignIn}
          >
            <Image
              src="/img/google.png"
              className="me-2"
              alt=""
              width={20}
              height={20}
              priority
            />
            <small>Sign In with Google</small>
          </button>
        </div>

        <div className="text-center text-gray-400">
          Don’t have an account?{" "}
          <a href="sign-up" className="text-indigo-500 hover:underline">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
