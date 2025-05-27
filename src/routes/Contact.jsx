import React from 'react'
import Layout from '../components/Layout'

export default function Contact() {
  return (
    <Layout>
    <div className='flex flex-col items-center justify-center flex-1'>
      <h1 className='text-5xl font-extrabold text-stone-300 pb-4'>CONTACT</h1>
      <h2 className="text-xl sm:text-3xl font-extrabold text-orange-200 text-center leading-normal my-4">
           SIGN PORTAL SRL ARAD
      </h2>
       <h3 className="text-md sm:text-5x  font-normal text-orange-200 text-center leading-normal">
           CIF: RO 16344256 <br/>Reg.Com (EUID): ROONRC.J2004000672027
        </h3>
        <hr className='w-full my-5 border-2 border-slate-600'/>
        <h3 className="text-md sm:text-5x  font-normal text-orange-200 text-center leading-normal">
                  Telefon: <strong>0744.845.974</strong>
        </h3>
        <h3 className="text-md sm:text-5x  font-normal text-orange-200 text-center leading-normal">
                  Email: <strong><a href = "mailto:office@signportal.ro">office@signportal.ro</a></strong>
        </h3>        
                <h3 className="text-md sm:text-5x  font-normal text-orange-200 text-center leading-normal">
                  Site web: <strong><a href = "https://signportal.ro" target='_blank'>https://signportal.ro</a></strong>
          
        </h3>
    </div>
    </Layout>
  )
}
