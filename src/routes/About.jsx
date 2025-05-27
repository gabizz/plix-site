import React from 'react'
import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <div className='flex flex-col items-center justify-center flex-1'>
        <section className="bg-black text-orange-300 px-6 py-12 md:px-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 border-b border-orange-300 pb-2">
              Despre Plix.ro
            </h2>
            <p className="mb-4 text-sm sm:text-xl text-justify">
              <strong>Plix.ro</strong> este o aplicație online modernă, dezvoltată de SIGN Portal srl Arad, cu scopul declarat de a  simplifica procesul de trimitere a corespondenței prin <strong>Poșta Română</strong>. Dedicată atât persoanelor fizice cât și instituțiilor sau firmelor care gestionează volume mari de scrisori, Plix.ro oferă un <strong>free-tier generos</strong> pentru a veni în sprijinul celor care au nevoie de eficiență și simplitate.
            </p>
            <ul className="list list-inside mb-4 space-y-2 text-sm sm:text-xl text-justify">
              <li>
                <strong>✉️ &nbsp;PLICURI</strong> – Generarea rapidă a plicurilor gata de imprimat, pe orice format fizic și pe orice tip de imprimantă.
              </li>
              <li>
                <strong>📬 COFIRMĂRI DE PRIMIRE</strong> – Crearea facilă a confirmărilor de primire standardizate, conform formularisticii specifice Poștei Române.
              </li>
              <li>
                <strong>📄 BORDEROURI DE EXPEDIȚIE</strong> – Completare automată a borderourilor pentru expediție, economisind timp și efort.
              </li>
              <li>
                <strong>🔐Confidențialitate absolută</strong> – Aplicația folosește <strong>doar stocarea locală</strong> din browser (indexedDB), ceea ce înseamnă că datele nu părăsesc niciodată stația ta de lucru și <strong>nu sunt stocate pe serverele noastre</strong>.
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