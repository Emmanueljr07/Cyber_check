"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Register } from "../api/user";
import { useValue } from "../context/AuthContext";

function Signup() {
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
    const register = await Register(email, password, dispatch);
    console.log(register);
    setEmail("");
    setPassword("");
    router.replace("/dashboard");
    return register;
    // try {
    //   const res = await createUserWithEmailAndPassword(email, password);
    //   console.log(res);
    //   sessionStorage.setItem("user", JSON.stringify(res?.user));
    //   router.push("/");
    //   setEmail("");
    //   setPassword("");
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Create an Account</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
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
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
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
            Sign Up
          </button>
        </form>
        <div className="text-center text-gray-400">
          Already have an account?{" "}
          <a href="sign-in" className="text-indigo-500 hover:underline">
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
