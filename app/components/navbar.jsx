// @flow strict
"use client";
import Link from "next/link";
import { useState } from "react";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-transparent" aria-label="Primary">
      <div className="flex flex-wrap items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            aria-label="Go to the homepage"
            className=" text-[#16f2b3] text-3xl font-bold">
            Vargav Mishra
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          className="group flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-[#1b103f] to-[#4a1c5e] p-2 shadow-lg transition-all duration-300 md:hidden"
        >
          <div className={`h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${isOpen ? 'translate-y-2 rotate-45' : ''}`}></div>
          <div className="flex w-6 justify-end">
            <div className={`h-[2px] rounded-full bg-white transition-all duration-300 ${isOpen ? 'w-0 opacity-0' : 'w-6 group-hover:w-4'}`}></div>
          </div>
          <div className={`h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${isOpen ? '-translate-y-2 -rotate-45' : ''}`}></div>
        </button>

        <ul
          className={`mt-4 flex w-full flex-col items-start text-sm transition-all duration-500 ease-in-out overflow-hidden md:mt-0 md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100 md:bg-transparent md:backdrop-blur-none md:shadow-none md:py-0 ${
            isOpen ? "max-h-[400px] opacity-100 bg-[#0a0f25]/80 backdrop-blur-md shadow-2xl rounded-xl py-2 border border-[#1b2c68]/50" : "max-h-0 opacity-0 py-0 border-transparent"
          }`}
          id="navbar-default"
        >
          <li>
            <Link onClick={() => setIsOpen(false)} className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about" aria-label="Go to the About section">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience" aria-label="Go to the Experience section"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div></Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills" aria-label="Go to the Skills section"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div></Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education" aria-label="Go to the Education section"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div></Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/blog" aria-label="Go to the blog page"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">BLOGS</div></Link>
          </li>
          <li>
            <Link onClick={() => setIsOpen(false)} className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects" aria-label="Go to the Projects section"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
