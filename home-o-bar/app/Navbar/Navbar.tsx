// 'use client';
// // app/navbar/Navbar.tsx
// import Link from 'next/link';
// import DarkModeToggle from '../dark-mode-toggle/DarkModeToggle';

// export default function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <Link href="/">Health-O-Bar</Link>
//       </div>
//       <ul className="nav-links">
//         <li><Link href="/about">About</Link></li>
//         <li><Link href="/services">Services</Link></li>
//         <li><Link href="/process">Process</Link></li>
//         <li><Link href="/contact">Contact</Link></li>
//       </ul>
//       <DarkModeToggle /> {/* Dark Mode toggle button */}
//     </nav>
//   );
// }
// import Link from 'next/link';
// import DarkModeToggle from '../dark-mode-toggle/DarkModeToggle';

// interface NavbarProps {
//   promotionalHeaderBarVisible: boolean;
// }

// export default function Navbar({ promotionalHeaderBarVisible }: NavbarProps) {
//   return (
//     <nav className="h-screen flex flex-col justify-between p-4 bg-white">
//       {promotionalHeaderBarVisible && (
//         <div className="promotional-header-bar bg-pink-500 text-white py-2 px-4 font-bold cursor-pointer flex justify-between items-center">
//           <span className="text-lg whitespace-nowrap overflow-hidden text-ellipsis">
//             Get 20% off on your first purchase!
//           </span>
//           <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
//             Learn More
//           </button>
//         </div>
//       )}
//       <div className="main-navbar flex justify-between items-center py-2 px-4">
//         <div className="logo text-2xl font-bold mr-4">
//           <Link href="/">Health-O-Bar</Link>
//         </div>
//         <ul className="nav-links flex justify-between items-center">
//           <li className="mr-4">
//             <Link href="/about">About</Link>
//           </li>
//           <li className="mr-4">
//             <Link href="/services">Services</Link>
//           </li>
//           <li className="mr-4">
//             <Link href="/process">Process</Link>
//           </li>
//           <li className="mr-4">
//             <Link href="/contact">Contact</Link>
//           </li>
//         </ul>
//         <DarkModeToggle />
//         <button className="lg:hidden flex justify-center w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full">
//           <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//             <rect x="4" y="4" width="8" height="8" rx="1" fill="#fff" />
//             <rect x="12" y="4" width="8" height="8" rx="1" fill="#fff" />
//             <rect x="4" y="12" width="8" height="8" rx="1" fill="#fff" />
//             <rect x="12" y="12" width="8" height="8" rx="1" fill="#fff" />
//           </svg>
//         </button>
//       </div>
//     </nav>
//   );
// }

// 'use client';

// import Link from 'next/link';
// import { useState } from 'react';
// import DarkModeToggle from '../dark-mode-toggle/DarkModeToggle';

// export default function Navbar() {
//   const [ctaVisible, setCtaVisible] = useState(true);

//   return (
//     <header>
//       {ctaVisible && (
//         <div className="bg-accent-color text-white py-2 px-4 text-center cursor-pointer">
//           <p className="animate-marquee whitespace-nowrap">
//             Limited time offer! Get 50% off on your first consultation. Click here to claim!
//           </p>
//         </div>
//       )}
//       <nav className="flex justify-between items-center bg-primary-color text-secondary-color p-4">
//         <div className="logo">
//           <Link href="/home" className="text-xl font-bold">Health-O-Bar
//           </Link>
//         </div>
//         <div className="flex items-center space-x-6">
//           <ul className="hidden md:flex space-x-4">
//             <li><Link href="/about">About</Link></li>
//             <li><Link href="/process">Process</Link></li>
//             <li><Link href="/pricing">Pricing</Link></li>
//             <li><Link href="/blogs">Blogs</Link></li>
//             <li><Link href="/contact">Contact Us</Link></li>
//           </ul>
//           <DarkModeToggle />
//           <button
//             onClick={() => setCtaVisible(!ctaVisible)}
//             className="md:hidden text-white"
//           >
//             ☰
//           </button>
//         </div>
//       </nav>
//       <div className={`md:hidden ${ctaVisible ? 'block' : 'hidden'}`}>
//         <ul className="space-y-2 p-4 bg-primary-color text-secondary-color">
//           <li><Link href="/about">About</Link></li>
//           <li><Link href="/process">Process</Link></li>
//           <li><Link href="/pricing">Pricing</Link></li>
//           <li><Link href="/blogs">Blogs</Link></li>
//           <li><Link href="/contact">Contact Us</Link></li>
//         </ul>
//       </div>
//     </header>
//   );
// }


'use client';
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import HOBLogo from "../media/logo/hObHorizontal.png";
import Image from "next/image";



export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isDark, setDarkMode] = useState(false);
  const [isCTABarVisible, setIsCTABarVisible] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [lastscrollY, setScrollY] = useState(0);

  const scrollNavbar = useCallback(() => {

    const currentScrollY = window.scrollY;

    if (currentScrollY > lastscrollY) {
      // Scroll down, hide the Navbar
      setIsVisible(false);
    } else {
      // Scroll up, show the Navbar
      setIsVisible(true);
    }
    setScrollY(currentScrollY);
  }, [lastscrollY]);

  useEffect(() => {
      window.addEventListener('scroll', scrollNavbar);

      return () => {
        window.removeEventListener('scroll', scrollNavbar);
      };
  }, [lastscrollY]);

  return (
    <nav className={`bg-pinkColor-light sticky z-50 top-0 shadow-lg transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* CTA Info Bar */}
      {isCTABarVisible && (
        <div className="bg-accent-color text-white text-sm py-1.5 px-4 flex justify-between items-center">
          <div className="w-full overflow-hidden">
            <p className=" bg-pinkColor-dark animate-scroll whitespace-nowrap rounded text-center">
              Get 50% off on your first purchase! Use code: WELCOME50
            </p>
          </div>
          <button
            className="ml-4 text-xs"
            onClick={() => setIsCTABarVisible(false)}
          >
            ✕
          </button>
        </div>
      )}

      {/* Navbar */}
      <nav className="flex items-center justify-between py-3 px-6 lg:px-10">
        {/* Brand/Logo */}
        <div>
          <Link href="/home" >
            <Image src={HOBLogo}
              alt="Health-O-Bar"
              width={200}
              height={100}
              className="cursor-pointer"
            />
          </Link>
          {/* <h1 className="text-xl font-bold text-primary-color">
            Health-O-Bar
          </h1> */}
        </div>

        {/* NavLinks */}
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex space-x-8">
            <Link href="/home" className="text-[#775048] hover:text-pinkColor-light">
              Home
            </Link>
            <Link href="/about" className="text-[#775048] hover:text-pinkColor-light">
              About
            </Link>
            <Link href="/process" className="text-[#775048] hover:text-pinkColor-light">
              Process
            </Link>
            <Link href="/pricing" className="text-[#775048] hover:text-pinkColor-light">
              Pricing
            </Link>
            <Link href="/blogs" className="text-[#775048] hover:text-pinkColor-light">
              Blogs
            </Link>
            <Link href="/contact" className="text-[#775048] hover:text-pinkColor-light">
              Contact Us
            </Link>
          </div>

          {/* Menu Button for smaller screens */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-pinkColor-dark focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Dark/Light Mode Toggle
          <button onClick={() => isDark ? setDarkMode(false) : setDarkMode(true)} className="ml-4 bg-pinkColor-dark text-black py-1.5 px-4 rounded-full  focus:outline-none">
            {isDark ? "Dark" : "Light"}
          </button> */}

        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-pinkColor-light px-6 py-4 space-y-4">
          <Link href="/about" className="block text-white hover:text-pinkColor-light">
            About
          </Link>
          <Link href="/process" className="block text-white hover:text-pinkColor-light">
            Process
          </Link>
          <Link href="/pricing" className="block text-white hover:text-pinkColor-light">
            Pricing
          </Link>
          <Link href="/blogs" className="block text-white hover:text-pinkColor-light">
            Blogs
          </Link>
          <Link href="/contact" className="block text-white hover:text-pinkColor-light">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}