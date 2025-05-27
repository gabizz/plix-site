import React from 'react'
import Layout from '../components/Layout'
import signLogo from "../assets/signlogo.svg"

export default function Contact() {
  return (
    <Layout>
    {/* The main content area inherits bg-white and text-gray-700 from Layout */}
    <div className='flex flex-col items-center justify-center flex-1 py-12 px-4 text-center '>
        
      <h1 className='text-xl sm:text-xl font-extrabold text-gray-500 py-10'>CONTACT</h1>
      <a href = "https://signportal.devgate.ro/contact-us/" target="_blank" className='w-5/12 sm:w-3/12 h-auto'>
       <img src = {signLogo}  />
       </a>
       <a href = "https://signportal.devgate.ro/contact-us/" target="_blank" >
      <h2 className="text-xl sm:text-xl font-bold text-blue-900 leading-normal my-4">
           SC SIGN PORTAL SRL ARAD
      </h2>
      </a>
       <h3 className="text-md sm:text-lg font-normal text-gray-600 leading-normal">
           CIF: <strong>RO 16344256</strong>
            <br/>
            Reg.Com (EUID): <strong>ROONRC.J2004000672027</strong>
        </h3>
        <hr className='w-4/5 sm:w-1/2 my-6 border-t border-gray-300'/>
        <h3 className="text-md sm:text-lg font-normal text-gray-600 leading-normal">
                  Telefon: <strong className="text-gray-800">0744.845.974</strong>
        </h3>
        <h3 className="text-md sm:text-lg font-normal text-gray-600 leading-normal">
                  Email: <strong className="text-gray-800"><a href = "mailto:office@signportal.ro" className="text-blue-800 hover:text-blue-600 hover:underline">office@signportal.ro</a></strong>
        </h3>        
        <h3 className="text-md sm:text-lg font-normal text-gray-600 leading-normal">
                  Site web: <strong className="text-gray-800"><a href = "https://signportal.ro" target='_blank' className="text-blue-800 hover:text-blue-800 hover:underline">www.signportal.ro</a></strong>
          
        </h3>
        <h3 className='py-10'> <a href = "https://signportal.devgate.ro/oferta" target='_blank' className='text-blue-800 underline'>
        oferta noastră completă de servicii web</a></h3>
    </div>
    </Layout>
  )
}
