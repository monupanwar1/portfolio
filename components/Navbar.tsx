import Link from "next/link";
import React from "react";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

export const Navbar = () => {
  return (
    <>
      <header className="fixed h-screen w-16 top-0 flex flex-col items-center justify-between bg-[#080808] backdrop-filter backdrop-blur-lg bg-opacity-50">
        <div className="text-white p-4 bg-[rgba(255, 0, 0, 0.5)] w-full flex items-center justify-center">
          <div className="bg-zinc-900 p-2 flex items-center justify-center">
            <h1 className="text-white font-bold text-3xl">
              M<span className="text-[#0AFF9D]">.</span>
            </h1>
          </div>
        </div>
        <ul className="flex flex-col text-white gap-20 mb-60">
          <Link
            href="./"
            className="relative transform rotate-90 text-center cursor-pointer hover:text-[#0AFF9D] transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-full before:w-full before:h-0.5 before:bg-[#0AFF9D] before:scale-x-0 hover:before:scale-x-100 before:origin-bottom-right hover:before:origin-bottom-left before:transition-transform before:duration-300"
          >
            Home
          </Link>

          <Link
           
            href="./about"
            className="relative transform rotate-90 text-center cursor-pointer hover:text-[#0AFF9D] transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-full before:w-full before:h-0.5 before:bg-[#0AFF9D] before:scale-x-0 hover:before:scale-x-100 before:origin-bottom-right hover:before:origin-bottom-left before:transition-transform before:duration-300"
          >
            About
          </Link>

          <Link
            href="./projects"
            className="relative transform rotate-90 text-center cursor-pointer hover:text-[#0AFF9D] transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-full before:w-full before:h-0.5 before:bg-[#0AFF9D] before:scale-x-0 hover:before:scale-x-100 before:origin-bottom-right hover:before:origin-bottom-left before:transition-transform before:duration-300"
          >
            Projects
          </Link>

          <Link
            href="./contact"
            className="relative transform rotate-90 text-center cursor-pointer hover:text-[#0AFF9D] transition duration-300 before:content-[''] before:absolute before:left-0 before:bottom-full before:w-full before:h-0.5 before:bg-[#0AFF9D] before:scale-x-0 hover:before:scale-x-100 before:origin-bottom-right hover:before:origin-bottom-left before:transition-transform before:duration-300"
          >
            Contact
          </Link>
        </ul>
      </header>

      <div className="fixed left-16 w-[calc(100%-4rem)] flex items-center justify-between px-4 py-4 bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20">
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#EBECF3] hover:text-[#0AFF9D] transition duration-300"
          >
            <IoLogoLinkedin className="text-3xl" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#EBECF3] hover:text-[#0AFF9D] transition duration-300"
          >
            <IoLogoGithub className="text-3xl" />
          </a>
        </div>
        <button className="bg-transparent border-2 border-[#0AFF9D] px-10 py-2 rounded-md text-[#0AFF9D] hover:bg-[#0AFF9D] transition duration-300 hover:text-black">
          My Resume
        </button>
      </div>
    </>
  );
};
