'use client';

import Link from 'next/link';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

export default function Navbar() {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Side Navbar */}
      <header className="fixed h-screen w-16 top-0 flex flex-col justify-between bg-[#080808] backdrop-blur-lg bg-opacity-50 ">
        <div className="p-4 flex items-center justify-center">
          <h1 className="font-bold text-3xl text-white hover:text-[#0AFF9D]">
            M<span className="text-[#0AFF9D]">.</span>
          </h1>
        </div>

        <ul className="flex flex-col items-center gap-20 mb-20 text-white">
          {navItems.map(({ label, href }) => (
            <li key={label} className="group relative">
              <Link
                href={href}
                className="rotate-90 block font-medium text-white cursor-pointer transition-colors duration-300 group-hover:text-[#0AFF9D]"
              >
                {label}
                <span className="absolute left-1/2 border-t  -translate-x-1/2 h-[2px] w-0 group-hover:w-full bg-[#0AFF9D] transition-all duration-300" />
              </Link>
            </li>
          ))}
        </ul>
      </header>

      {/* Top Navbar */}
      <div className="fixed left-16 w-[calc(100%-4rem)] flex justify-between items-center px-8 py-4 backdrop-blur-xl bg-black/20 z-10">
        <div className="flex items-center gap-4">
          <Link
            href="https://linkedin.com"
            className="text-white hover:text-[#0AFF9D] transition-colors text-3xl"
          >
            <IoLogoLinkedin />
          </Link>
          <Link
            href="https://github.com"
            className="text-white hover:text-[#0AFF9D] transition-colors text-3xl"
          >
            <IoLogoGithub />
          </Link>
        </div>

        <a
          href="/resume.pdf"
          className="border-2 border-[#0AFF9D] px-6 py-2 rounded-md text-[#0AFF9D] hover:bg-[#0AFF9D] hover:text-black transition duration-300"
        >
          My Resume
        </a>
      </div>
    </>
  );
}
