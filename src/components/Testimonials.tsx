export default function Testimonials() {
    return (
        <section id="testimonials" className="pt-32">
            <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">Testemunhos
                        de utilizadores</h2>
                    <p className="mx-auto mt-6 text-gray-700 dark:text-gray-300 md:w-3/4 lg:w-3/5">Aqui estão alguns
                        testemunhos de pessoas que acreditam e nós.</p>
                </div>
                <div className="mt-12 grid gap-8 md:grid-cols-2">
                    <div
                        className="space-y-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
                        <h2 className="text-gray-500 dark:text-gray-300 font-bold">Testemunho de um utilizador</h2>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-serif">"</span>O portal
                            ajuda a procura de um terapeuta compatível com minhas necessidades. As sessões
                            de vídeo são práticas e eficazes. Estou muito satisfeito com o progresso que fiz até
                            agora.<span
                                className="font-serif">"</span></p>
                        <div className="flex items-center gap-3 text-left">
                            <img className="h-12 w-12 rounded-full" src="/images/avatars/user.png"
                                 alt="user avatar" width="512" height="512" loading="lazy"/>
                            <div>
                                <h3 className="text-lg font-semibold leading-none text-gray-600 dark:text-gray-200">João
                                    M</h3>
                            </div>
                        </div>
                    </div>

                    <div
                        className="space-y-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
                        <h2 className="text-gray-500 dark:text-gray-300 font-bold">Testemunho de um utilizador</h2>
                        <p className="text-gray-600 dark:text-gray-300"><span className="font-serif">"</span>Encontrei a
                            terapeuta perfeita para mim. Ela me ajudou a enfrentar questões importantes e a encontrar
                            mais equilíbrio na minha vida. Recomendo a todos que procuram apoio emocional.<span
                                className="font-serif">"</span></p>
                        <div className="flex items-center gap-3 text-left">
                            <img className="h-12 w-12 rounded-full" src="/images/avatars/user.png"
                                 alt="user avatar" width="512" height="512" loading="lazy"/>
                            <div>
                                <h3 className="text-lg font-semibold leading-none text-gray-600 dark:text-gray-200">Carla
                                    S.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
