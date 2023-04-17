'use client'
import {useState} from "react";

const initialState = {}

const content = {
    faqs: [
        {
            question: 'What included in the pack ?',
            answer: 'A Potato'
        },
        {
            question: 'Are you hot?',
            answer: 'Super hot man'
        },
        {
            question: 'Are you a potato?',
            answer: 'A hot potato'
        },
        {
            question: 'What is your favorite potato?',
            answer: 'youuuuu'
        }
    ]
}

export default function Faqs() {
    const [activeFAQ, setActiveFAQ] = useState(0)

    return (
        <section id="faqs" className="my-32">
            <div className="mx-auto px-4 sm:px-12 xl:max-w-5xl xl:px-0">
                <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">Frequently
                    Asked Questions</h2>

                <div
                    className="divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800">
                    {content.faqs.map(({question, answer}, index) => (
                            <div>
                                <dl className="faq mx-auto max-w-2xl">
                                    <dt className="text-lg">
                                        <button type="button"
                                                onClick={() => {
                                                    setActiveFAQ(index)
                                                }}
                                                className="flex w-full items-start justify-between py-6 text-left text-gray-400"
                                                aria-controls="faq-0" data-active="false">
                                            <span className="font-medium text-gray-900 dark:text-white">{question}</span>
                                            <span className="ml-6 flex h-7 items-center">
                                        <svg
                                            className={`arrow-down h-6 w-6 ${activeFAQ === index ? 'rotate-180' : 'rotate-0'} transform duration-300`}
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                                        </svg>
                                    </span>
                                        </button>
                                    </dt>
                                    <dd className={`faq-answer block ${activeFAQ === index ? 'max-h' : 'max-h-0'} overflow-hidden pr-12 duration-300 ease-in-out`}
                                        id="faq-0">
                                        <p className="pb-6 text-base text-gray-600 dark:text-gray-400">{answer}</p>
                                    </dd>
                                </dl>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    )
}