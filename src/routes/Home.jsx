// /Users/user/git/autopinkstyle.ro/src/routes/Home.jsx
import React from 'react';
import Layout from '../components/Layout';
import carImage from "../assets/logo.svg"

export default function Home() {
  return (
    <Layout>
      <div className="  flex flex-col items-center justify-center flex-1">
        <img
          src={carImage}
          alt="plix logo"
          className="mb-4 max-w-xs h-auto" // Adjusted for better responsiveness
        />
        <h1 className="text-2xl sm:text-4xl font-extrabold text-yellow-600 text-center leading-normal">
          Soluția smart <br/>pentru eficientizarea corespondenței poștale
        </h1>

        <h2 className="text-sm sm:text-2xl font-extralight text-grey-200 text-center py-4 px-2">
          PLICURI <br/> CONFIRMĂRI DE PRIMIRE - BORDEROURI DE EXPEDIȚIE
        </h2>
        <a href = "https://print.plix.ro" className="cursor-pointer">
        <button type="button" className=" cursor-pointer bg-yellow-600 text-stone-900 text-3xl font-bold py-3 px-6 rounded-md hover:bg-yellow-700 transition duration-300">
          ACCES APLICAȚIE
        </button>
        </a>  
        
      </div>
    </Layout>
  );
}
