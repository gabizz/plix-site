import React from 'react'
import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      {/* The main content area inherits bg-white and text-gray-700 from Layout */}
      <div className='flex flex-col items-center justify-center flex-1 py-12 '>
        <section className="px-6 md:px-20 w-full "> {/* Removed bg-black and text-orange-300 */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-blue-800 mb-6 border-b border-blue-800 pb-2">
              Despre PLIX.RO
            </h2>
            <p className="mb-4 text-sm sm:text-xl text-justify">
              <strong className="text-blue-800">Plix.ro</strong> este o aplicație online modernă, dezvoltată de SIGN Portal srl Arad, cu scopul declarat de a  simplifica procesul de trimitere a corespondenței prin <strong className="text-blue-800">Poșta Română</strong>. Dedicată atât persoanelor fizice cât și instituțiilor sau firmelor care gestionează volume mari de scrisori, Plix.ro oferă un <strong className="text-blue-800">free-tier generos</strong> pentru a veni în sprijinul celor care au nevoie de eficiență și simplitate.
            </p>
            <ul className="list list-inside mb-4 space-y-2 text-sm sm:text-xl text-justify">
              <li>
                <strong className="text-blue-800">✉️ &nbsp;PLICURI</strong> – Generarea rapidă a plicurilor gata de imprimat, pe orice format fizic și pe orice tip de imprimantă.
              </li>
              <li>
                <strong className="text-blue-800">📬 COFIRMĂRI DE PRIMIRE</strong> – Crearea facilă a confirmărilor de primire standardizate, conform formularisticii specifice Poștei Române.
              </li>
              <li>
                <strong className="text-blue-800">📄 BORDEROURI DE EXPEDIȚIE</strong> – Completare automată a borderourilor pentru expediție, economisind timp și efort.
              </li>
              <li>
                <strong className="text-blue-800">🔐Confidențialitate absolută</strong> – Aplicația folosește <strong className="text-blue-800">doar stocarea locală</strong> din browser (indexedDB), ceea ce înseamnă că datele nu părăsesc niciodată stația ta de lucru și <strong className="text-blue-800">nu sunt stocate pe serverele noastre</strong>.
              </li>
            </ul>
            <p className='text-justify text-sm sm:text-xl'>
              Plix.ro este alegerea ideală pentru oricine are de trimis scrisori și vrea să evite munca repetitivă și erorile umane. Fără conturi, fără servere, fără riscuri – doar eficiență și control total asupra datelor tale.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  )
}