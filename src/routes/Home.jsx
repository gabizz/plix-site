// /Users/user/git/autopinkstyle.ro/src/routes/Home.jsx
import React from 'react';
import Layout from '../components/Layout';
import plixLogo from "../assets/logo.svg"

export default function Home() {
  return (
    <Layout>
      {/* The main content area inherits bg and text-gray-700 from Layout */}
      <div className="flex flex-col items-center justify-center flex-1 px-4 text-center">
        <img
          src={plixLogo}
          alt="plix logo"
          className="mb-4 w-4/12 sm:w-1/12 h-auto" // Adjusted for better responsiveness
        />
        <h1 className="text-2xl sm:text-4xl font-extrabold text-blue-900 leading-normal">
          Soluția smart <br/>pentru eficientizarea corespondenței poștale
        </h1>

        <h2 className="text-sm sm:text-lg font-normal text-gray-500 py-4">
          TIPĂRIRE PLICURI - CONFIRMĂRI DE PRIMIRE - BORDEROURI DE EXPEDIȚIE
        </h2>
        <a href = "https://print.plix.ro">
        <button type="button" className="cursor-pointer bg-blue-700 text-white text-2xl sm:text-3xl font-bold  px-10 py-5 rounded-md hover:bg-blue-800 transition duration-300 shadow-md hover:shadow-lg">
          ACCES APLICAȚIE
        </button>
        </a>  
      </div>
    </Layout>
  );
}
