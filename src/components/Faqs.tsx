'use client';

import Script from 'next/script';

const initialState = {};

const content = {
    faqs: [
        {
            question: 'Como posso entrar em contacto, caso tenha alguma questão, sugestão ou reclamação?',
            answer: (
                <>
                    Para entrar em contacto connosco, envie e-mail com o seu assunto para o endereço{' '}
                    <a href="mailto:help@psiplexus.com">help@psiplexus.com</a>. Responderemos o mais rapidamente
                    possível até 48h depois do seu contacto inicial.
                </>
            ),
        },
        {
            question: 'Como encontram o/a psicólogo/a mais adequado/a para mim?',
            answer: 'Com base nas preferências e necessidades partilhadas por si, realizamos um processo de triagem através de uma análise cuidada das mesmas. Este processo permite conectá-lo/a ao/à psicólogo/a mais adaptado para a sua realidade.',
        },
    ],
};

export default function Faqs() {
    return (
        <>
            <section id="faqs" className="my-32">
                <div className="mx-auto px-4 sm:px-12 xl:max-w-5xl xl:px-0">
                    <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">
                        Perguntas Frequentes
                    </h2>
                    <div className="divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800">
                        {content.faqs.map(({ question, answer }, index) => (
                            <div key={index}>
                                <dl className="faq mx-auto max-w-2xl">
                                    <dt className="text-lg">
                                        <button
                                            type="button"
                                            className="flex w-full items-start justify-between py-6 text-left text-gray-400"
                                            aria-controls={`faq-${index}`}
                                            data-active="false"
                                        >
                                            <span className="font-medium text-gray-900 dark:text-white">
                                                {question}
                                            </span>
                                            <span className="ml-6 flex h-7 items-center">
                                                <svg
                                                    className="arrow-down h-6 w-6 transform duration-300"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                    />
                                                </svg>
                                            </span>
                                        </button>
                                    </dt>
                                    <dd
                                        className={`faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out`}
                                        id={`faq-${index}`}
                                    >
                                        <p className="pb-6 text-base text-gray-600 dark:text-gray-400">{answer}</p>
                                    </dd>
                                </dl>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Script id="faq-script">
                {`let faqs = document.querySelectorAll(".faq");

for (let i = 0; i < faqs.length; i++) {
    let answer = faqs[i].querySelector(".faq-answer");
    let icon = faqs[i].querySelector(".arrow-down");

    faqs[i].addEventListener("click", () => {
        for (let j = 0; j < faqs.length; j++) {
            let answer2 = faqs[j].querySelector(".faq-answer");
            let icon2 = faqs[j].querySelector(".arrow-down");

            if (faqs[i] != faqs[j]) {
                answer2.style.maxHeight = "0px";
                icon2.classList.replace("rotate-180", "rotate-0");
            }
        }

        if (icon.classList.contains("rotate-180")) {
            answer.style.maxHeight = 0 + "px";
            icon.classList.replace("rotate-180", "rotate-0");
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
            icon.classList.replace("rotate-0", "rotate-180");
        }
    });
}
`}
            </Script>
        </>
    );
}
