"use client"
import { motion } from "framer-motion"

export default function Goodbye() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center p-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <svg
          className="w-64 h-64 mx-auto mb-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="#4A5568"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14"
            stroke="#4A5568"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 9H9.01"
            stroke="#4A5568"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 9H15.01"
            stroke="#4A5568"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Agradecemos o Vosso Apoio
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-8">
          Foi bom ter-vos connosco. Obrigado por acreditarem na importância da saúde mental.
        </p>
        <p className="text-lg text-gray-600">
          O vosso compromisso com o bem-estar mental fez a diferença.
        </p>
        <p className="text-lg text-gray-600 mt-4">
          Continuem a dar prioridade à vossa saúde mental.
        </p>
      </motion.div>
    </div>
  )
}
