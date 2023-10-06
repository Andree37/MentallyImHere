"use client";
import Image from "next/image";

export default function Laicos() {
    return (
        <div className="relative">
            <h1 className='text-xl font-bold text-blue-800 dark:text-white sm:text-3xl md:text-4xl' onClick={() => {
                window.open('https://laicos.pt');
            }}>
                Laicos
            </h1>
            <p className="mt-2 mb-8 text-gray-600 dark:text-gray-300">Em parceria com a Laicos, valorizamos intensamente
                o suporte psicológico profissional, proporcionando desenvolvimento contínuo aos psicólogos e facilitando
                conexões confiáveis entre os profissionais e os clientes que necessitam dos seus serviços.</p>
            <div className="flex gap-4">
                <Image className="h-12 w-auto dark:contrast-100 dark:grayscale dark:invert cursor-pointer"
                       src="/images/clients/laicos.png" alt="microsoft" width="360" height="296"
                       onClick={() => {
                           window.open('https://laicos.pt');
                       }}/>
                <div>
                    <h2 className="leading-0 text-lg font-medium text-gray-700 dark:text-white">Laicos</h2>
                    <p className="leading-0 -mt-0.5 text-sm text-gray-500 dark:text-gray-400">Cliente
                        parceiro</p>
                </div>
            </div>
        </div>
    )
}
