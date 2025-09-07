"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faUser,
  faBars,
  faTimes,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faFlickr,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "shadow-md bg-white py-3 scrolled" : "py-0"
      }`}
    >
      {/* Top Bar */}
      <div
        className={`nav-top w-full flex justify-between items-center gap-3
          px-[2%] sm:px-[8%] lg:px-[12%] overflow-hidden transition-all duration-500 ease-in-out
          ${isScrolled ? "max-h-0 opacity-0 py-0" : "max-h-[200px] opacity-100 py-3"}
        `}
      >
        {/* Contact Info */}
        <ul className="hidden lg:flex items-center gap-6 text-[#727272]">
          <li className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} className="text-[#727272]" />
            <span>+91 71 054 9560</span>
          </li>
          <li className="flex items-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-[#727272]" />
            <span>Booking@skyfare.com</span>
          </li>
        </ul>

        {/* Social + Auth */}
        <div className="flex items-center justify-between lg:justify-center gap-3 text-[#727272] w-full lg:w-auto">
          <ul className="flex items-center gap-3">
            <li><FontAwesomeIcon icon={faFacebook} className="text-[#819a0]" /></li>
            <li><FontAwesomeIcon icon={faFlickr} className="text-[#819a0]" /></li>
            <li><FontAwesomeIcon icon={faXTwitter} className="text-[#819a0]" /></li>
          </ul>

          <ul className="flex items-center gap-4 ps-3">
            <li className="lg:text-md text-sm cursor-pointer flex items-center gap-2">
              <FontAwesomeIcon icon={faLock} className="text-[#8192a0]" />
              <span>Login</span>
            </li>
            <li className="lg:text-md text-sm cursor-pointer flex items-center gap-2">
              <FontAwesomeIcon icon={faUser} className="text-[#8192a0]" />
              <span>Sign Up</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Nav */}
      <div
        className={`w-full px-[2%] sm:px-[8%] lg:px-[12%] text-start lg:text-center relative flex justify-between lg:justify-center nav-menu-container transition-all duration-500 ease-in-out ${
          isScrolled ? "bg-white" : "bg-transparent"
        }`}
      >
        {/* Mobile Logo */}
        <div className="lg:hidden flex logo text-2xl uppercase font-semibold">
          <Link href="#" className="unbounded-font">
            Sky<span className="unbounded-font">Fare</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-menu hidden lg:flex w-full justify-center items-center gap-14 py-5 relative">
          <li><Link href="/" className=" font-[500] hover:text-black transition-colors duration-500">Home</Link></li>
          <li><Link href="/About" className=" font-[500] hover:text-black transition-colors duration-500">About</Link></li>
          <li><Link href="/Tour" className=" font-[500] hover:text-black transition-colors duration-500">Tour</Link></li>
          
          <div className="logo text-3xl uppercase font-semibold">
            <Link href="/" className="unbounded-font">
              Sky<span className="unbounded-font">Fare</span>
            </Link>
          </div>

          <li><Link href="/Faq" className="font-[500] hover:text-black transition-colors duration-500">Faq</Link></li>
          <li><Link href="/Blog" className=" font-[500] hover:text-black transition-colors duration-500">Blog</Link></li>
          <li><Link href="/Contact" className=" font-[500] hover:text-black transition-colors duration-500">Contact</Link></li>
        </ul>

        {/* Mobile Toggle */}
        <div className="flex justify-center items-center lg:hidden">
          <div
            className="toggle-btn cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon
              icon={isOpen ? faTimes : faBars}
              className="text-[#193555] text-xl"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`lg:hidden flex flex-col items-center gap-6 bg-[#f7f7f7] shadow-md absolute left-0 w-full
          overflow-hidden transition-all duration-500 ease-in-out
          ${isOpen ? "max-h-[500px] top-full mt-3 opacity-100 py-6" : "max-h-0 opacity-0 py-0 top-full"}
        `}
        >
          <li><Link href="/" className="font-[500] hover:text-black">Home</Link></li>
          <li><Link href="/About" className="font-[500] hover:text-black">About</Link></li>
          <li><Link href="/Tour" className="font-[500] hover:text-black">Tour</Link></li>
          <li><Link href="/Faq" className="font-[500] hover:text-black">Faq</Link></li>
          <li><Link href="/Blog" className="font-[500] hover:text-black">Blog</Link></li>
          <li><Link href="/Contact" className="font-[500] hover:text-black">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
