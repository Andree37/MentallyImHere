'use client';
import Image from 'next/image';

export default function Laicos() {
    return (
        <div className="relative">
            <h1
                className="text-xl font-bold text-indigo-400 dark:text-white sm:text-3xl md:text-4xl"
                onClick={() => {
                    window.open('https://laicos.pt');
                }}
            >
                <div className="flex gap-4">
                    <Image
                        className="h-12 w-auto dark:contrast-100 dark:grayscale dark:invert cursor-pointer"
                        src="/images/clients/laicos.png"
                        alt="microsoft"
                        width="360"
                        height="296"
                        onClick={() => {
                            window.open('https://laicos.pt');
                        }}
                    />
                    <div>
                        <h2 className="leading-0 text-lg font-medium text-gray-700 dark:text-white">
                            Laicos - Behavioural Change
                        </h2>
                        <p className="leading-0 -mt-0.5 text-sm text-gray-500 dark:text-gray-400">Cliente parceiro</p>
                    </div>
                </div>
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
                Em parceria com a Laicos-Behavioural Change, valorizamos o acesso a cuidados da saúde mental para todas
                as pessoas que o procurem, bem como os serviços prestados por profissionais qualificados e credenciados.
                Facilitamos, assim, o encontro entre a pessoa que procura e o profissional que presta o serviço.
            </p>
        </div>
    );
}
