"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useValue } from "./context/AuthContext";

function LandingPage() {
  const router = useRouter();
  const {
    state: { currentUser },
  } = useValue();

  useEffect(() => {
    if (currentUser) {
      router.replace("/dashboard");
    }
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      {/* Navbar */}
      <nav className="w-full p-6 flex justify-between items-center bg-gray-800">
        <h1 className="text-2xl font-bold text-indigo-500">MyApp</h1>
        <div className="space-x-4">
          <button
            onClick={() => router.push("/sign-in")}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md font-semibold"
          >
            Login
          </button>
          <button
            onClick={() => router.push("/sign-up")}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md font-semibold"
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to MyApp
        </h2>
        <p className="text-gray-400 text-lg md:text-2xl max-w-2xl mb-8">
          A secure, user-friendly platform designed to simplify your financial
          interactions.
        </p>
        <button
          onClick={() => router.push("/sign-up")}
          className="mt-4 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-md text-lg font-semibold transition duration-200"
        >
          Get Started
        </button>
      </main>

      {/* Footer */}
      <footer className="py-4 bg-gray-800 w-full text-center text-gray-500">
        © 2024 MyApp. All rights reserved.
      </footer>
    </div>
  );
}

export default LandingPage;
