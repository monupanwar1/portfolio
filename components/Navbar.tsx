'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import { motion } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: isHome ? '#about' : '/about' },
    { label: 'Projects', href: isHome ? '#projects' : '/projects' },
    { label: 'Contact', href: isHome ? '#contact' : '/contact' },
  ];

  return (
    <>
      {/* Side Navbar with animation */}
      <motion.header
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed h-screen w-16 top-0 flex flex-col justify-between bg-[#080808] backdrop-blur-lg bg-opacity-50 z-50"
      >
        <section className="p-4 flex items-center justify-center w-full">
          <h1 className="font-bold text-3xl text-white hover:text-[#0AFF9D]">
            M<span className="text-[#0AFF9D]">.</span>
          </h1>
        </section>

        <ul className="flex flex-col items-center gap-20 mb-20 text-white">
          {navItems.map(({ label, href }) => (
            <li key={label} className="group relative">
              <Link
                href={href}
                className="rotate-90 block font-medium cursor-pointer transition-colors duration-300 hover:text-[#0AFF9D]"
              >
                {label}
                <span className="absolute left-1/2 border-t -translate-x-1/2 h-[2px] w-0 group-hover:w-full bg-[#0AFF9D] transition-all duration-300" />
              </Link>
            </li>
          ))}
        </ul>
      </motion.header>

      {/* Top Navbar with fade-in */}
      <motion.section
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="fixed left-16 w-[calc(100%-4rem)] flex justify-between items-center px-8 py-4 backdrop-blur-xl bg-black/20 z-40"
      >
        <div className="flex items-center gap-4">
          <Link
            href="https://www.linkedin.com/in/monu-panwar"
            target="_blank"
            className="text-white hover:text-[#0AFF9D] text-3xl"
          >
            <IoLogoLinkedin />
          </Link>
          <Link
            href="https://github.com/monupanwar1"
            target="_blank"
            className="text-white hover:text-[#0AFF9D] text-3xl"
          >
            <IoLogoGithub />
          </Link>
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          className="border-2 border-[#0AFF9D] px-6 py-2 rounded-md text-[#0AFF9D] hover:bg-[#0AFF9D] hover:text-black transition duration-300"
        >
          My Resume
        </a>
      </motion.section>
    </>
  );
}
