import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdClose, MdMenu } from "react-icons/md"; // MdHome was imported but not used.
import signLogo from "../assets/signlogo.svg"
import backgroundImage from '../assets/bkg.jpeg'; // without ?url

export default function Layout({children}) {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (

    <div className="flex flex-col min-h-screen bg-stone-500">
      <header className="bg-blue-800 shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 relative"> {/* Added relative for mobile menu positioning */}
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-4xl font-bold text-yellow-200 hover:text-blue-200 tracking-widest">
                PLIX.RO
              </Link>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4 sm:space-x-6">

              <Link to="/about" className="text-stone-50 hover:text-white px-3 py-2 rounded-md text-sm font-bold">
                DESPRE
              </Link>
              <Link to="/contact" className="text-stone-50 hover:text-white px-3 py-2 rounded-md text-sm font-bold">
                CONTACT
              </Link>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-600 p-2 rounded-md"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <span className="sr-only">Deschide meniu</span>
                {isMobileMenuOpen ? (
                  // X icon
                  <MdClose size="2em" className='text-white'/>
                ) : (
                  // Hamburger icon
                  <MdMenu size="2em" className='text-white'/>
                )}
              </button>
            </div>
          </div>
          {/* Mobile Menu, show/hide based on menu state */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-16 inset-x-0 bg-blue-600 shadow-lg rounded-b-md z-40" id="mobile-menu">
              <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <li>
                  <Link to="/about" className="block text-blue-50 hover:text-white hover:bg-blue-500 px-3 py-2 rounded-md text-xl font-extrabold" onClick={() => setIsMobileMenuOpen(false)}>
                    DESPRE NOI
                  </Link>
                </li>
                <li>
                   <Link to="/contact" className="block text-blue-50 hover:text-white hover:bg-blue-500 px-3 py-2 rounded-md text-xl font-extrabold" onClick={() => setIsMobileMenuOpen(false)}>
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>
<main className="relative flex-grow flex flex-col bg-stone-50 text-gray-700 main-content-zoom-in overflow-hidden">
  {/* Background image */}
  <div
    className="absolute inset-0 -z-10 bg-cover bg-center opacity-30 "
    style={{ backgroundImage: `url(${backgroundImage})` }}
  />

  <div className="flex-grow flex flex-col">
    {children}
  </div>
</main>
      <footer className="bg-white text-gray-600 text-center p-4 text-sm sm:text-md font-normal sm:font-bold z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className='flex flex-wrap justify-center items-center space-x-3'>
          <img src = {signLogo} className='w-3/12 sm:w-1/12'/>
          <div>&copy; {new Date().getFullYear()} SIGN PORTAL s.r.l. ARAD. <br/>Toate drepturile rezervate.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
         
