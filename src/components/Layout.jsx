import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdClose, MdHome, MdMenu } from "react-icons/md"

export default function Layout({children}) {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (

    <div className="flex flex-col min-h-screen bg-orange-800">
      <header className="bg-yellow-600 shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 relative"> {/* Added relative for mobile menu positioning */}
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-slate-300 hover:text-yellow-300">
                PLIX.RO
              </Link>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4 sm:space-x-6">

              <Link to="/about" className="text-gray-50 hover:text-pink-100 px-3 py-2 rounded-md text-sm font-medium">
                DESPRE
              </Link>
              <Link to="/contact" className="text-gray-50 hover:text-pink-100 px-3 py-2 rounded-md text-sm font-medium">
                CONTACT
              </Link>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-pink-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500 p-2 rounded-md"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <span className="sr-only">Deschide meniu</span>
                {isMobileMenuOpen ? (
                  // X icon
                  <MdClose size = "2em" className='text-white'/>
                ) : (
                  // Hamburger icon
                    <MdMenu size = "2em" className='text-yellow-400'/>
                )}
              </button>
            </div>
          </div>
          {/* Mobile Menu, show/hide based on menu state */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-16 inset-x-0 bg-orange-700 shadow-lg rounded-b-md z-40" id="mobile-menu">
              <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <li>
                  <Link to="/about" className="block text-orange-100 hover:text-yellow-600 hover:bg-pink-50 px-3 py-2 rounded-md text-xl font-extrabold" onClick={() => setIsMobileMenuOpen(false)}>
                    DESPRE NOI
                  </Link>
                </li>
                <li>
                   <Link to="/contact" className="block text-orange-100 hover:text-yellow-600 hover:bg-pink-50 px-3 py-2 rounded-md text-xl font-extrabold" onClick={() => setIsMobileMenuOpen(false)}>
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>

      <main className="flex-grow flex flex-col bg-stone-950 text-gray-50 main-content-zoom-in">
        {children}
      </main>

      <footer className="bg-stone-900 text-white text-center p-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p>&copy; {new Date().getFullYear()} SIGN PORTAL s.r.l. ARAD. Toate drepturile rezervate.</p>
          {/* <p>România, Arad, Vladimirescu, Str. Gärii, Nr. 104</p> */}
        </div>
      </footer>
    </div>
  );
}
         
