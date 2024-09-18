'use client';

import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { useState, useEffect } from "react";
import HOBLogo from '../media/logo/hOblogo.jpg'
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const [year, setYear] = useState(2024);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-pinkColor-light text-[#775048] p-6">
      {/* Upper Section */}
      <div className="flex flex-col md:flex-row justify-around items-center">

        <nav className="flex space-x-4">
          <Link href="/about" className="hover:text-[#C59C94]">About</Link>
          <Link href="/process" className="hover:text-[#C59C94]">Process</Link>
          <Link href="/pricing" className="hover:text-[#C59C94]">Pricing</Link>
          <Link href="/blogs" className="hover:text-[#C59C94]">Blogs</Link>
          <Link href="/contact" className="hover:text-[#C59C94]">Contact Us</Link>
        </nav>

        <div className="flex justify-between items-center">
          <Image src={HOBLogo} alt="Healthobar Logo" className="rounded-full" width={30} height={15} />
          <p className="text-[#775048] mx-5">Health-O-Bar By Sanya Lamba</p>
        </div>

      </div>

      {/* Lower Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mx-5 mt-6">
        {/* Contact Details and Social Media Links */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="flex flex-col items-center md:items-start">
            <p>Email: contact@healthobar.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-[#C59C94]" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-[#C59C94]" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl hover:text-[#C59C94]" />
            </a>
          </div>
        </div>
        {/* Copyright Text */}
        <p className="text-right mt-4 md:mt-0">&copy; {year} All rights reserved.</p>
      </div>
    </footer>
  );
}
