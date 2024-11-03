import Link from "next/link";
import React from "react";

export default function menuBar() {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-white">
                Logo
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <Link
                href="/"
                className="text-white hover:bg-white hover:text-black rounded-lg p-2"
              >
                Home
              </Link>
              <Link
                href="/"
                className="text-white hover:bg-white hover:text-black rounded-lg p-2"
              >
                Activities
              </Link>
              <Link
                href="/"
                className="text-white hover:bg-white hover:text-black rounded-lg p-2"
              >
                Contacts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
