import InfoForm from "@/components/InfoForm";

export default function EmailCTA() {
    return (
        <section
            id="email-cta"
            className="relative before:absolute before:inset-0 before:h-px before:w-96 before:bg-gradient-to-r before:from-yellow-300 before:via-pink-400 before:to-transparent after:absolute after:inset-0 after:ml-auto after:mt-auto after:h-px after:w-96 after:bg-gradient-to-l after:from-yellow-300 after:via-pink-400 after:to-transparent">
            <div className="border-y border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-darker">
                <div className="relative mx-auto px-6 md:max-w-full md:px-12 lg:max-w-6xl xl:px-0">
                    <div className="items-end justify-between md:flex">
                        <div className="h-max py-16 md:w-6/12 w-full">
                            <div className="text-center md:text-left">
                                <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:w-max md:text-4xl xl:text-5xl">
                                    Encontre profissionais de saúde
                                </h2>
                                <p className="mb-8 mt-6 text-gray-600 dark:text-gray-300">Preencha este formulário e
                                    ajude-nos a encontrar o melhor profissional, explicando a motivaçāo da sua
                                    consulta.</p>
                                <InfoForm/>
                            </div>
                        </div>

                        <div className="md:w-[55%] lg:w-1/2">
                            <img src="/images/cta.png" alt="tailus stat cards components"
                                 loading="lazy" width="1000" height="1000"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}