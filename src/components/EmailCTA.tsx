import GenderText from '@/components/GenderText';
import RegisterClientForm from '@/components/QuillForms/RegisterClientForm';
import { Suspense } from 'react';

export default function EmailCTA() {
    return (
        <section id="email-cta" className="relative">
            <div className="border-y border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-darker">
                <div className="relative mx-auto px-6 md:max-w-full md:px-12 lg:max-w-6xl xl:px-0">
                    <div className="items-end justify-between md:flex md:space-y-0">
                        <div className="h-max py-16  w-full">
                            <div className="text-center md:text-left">
                                <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:w-max md:text-4xl xl:text-5xl">
                                    Passo 1:
                                </h2>
                                <h2 className="text-2xl mt-2 font-medium text-gray-800 dark:text-white md:w-max md:text-4xl xl:text-5xl">
                                    Partilhe connosco as suas necessidades e preferências
                                </h2>
                                <div className="mb-8 mt-6 text-gray-600 dark:text-gray-300">
                                    Preencha o formulário abaixo e ajude-nos a compreender melhor a sua realidade para
                                    que possamos <GenderText text={'conectá-l@ ao psicólog@'} /> mais adaptado para si.
                                </div>
                                <Suspense>
                                    <RegisterClientForm />
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
