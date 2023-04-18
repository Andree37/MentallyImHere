export default function InfoForm() {
    return (
        <div className="relative">
            <form action="/api/potato" method="post"
                  className="relative rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-12">
                <div
                    className="absolute inset-0 hidden scale-105 rounded-3xl bg-gradient-to-b from-transparent dark:block dark:to-gray-900/80"></div>
                <div className="relative">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Precisamos de alguma
                        informação</h2>
                    <div className="mt-8 mb-6 space-y-4">
                        <div>
                            <label htmlFor="name" className="mb-2 block text-gray-600 dark:text-gray-300">O seu nome
                                <span
                                    className="text-xl text-red-500 dark:text-red-400">*</span></label>
                            <input type="text" name="name" id="name" autoComplete="name" placeholder="nome"
                                   className="peer block w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700"/>
                            <span
                                className="mt-1 hidden text-sm text-red-500 peer-invalid:block">Insira o seu nome</span>
                        </div>
                        <div>
                            <label htmlFor="email" className="mb-2 block text-gray-600 dark:text-gray-300">Email <span
                                className="text-xl text-red-500 dark:text-red-400">*</span></label>
                            <input type="email" name="email" id="email" autoComplete="email"
                                   placeholder="email"
                                   className="peer block w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700"/>
                            <span
                                className="mt-1 hidden text-sm text-red-500 peer-invalid:block">Insira um email válido</span>
                        </div>
                        <div>
                            <label htmlFor="message"
                                   className="mb-2 block text-gray-600 dark:text-gray-300">Motivação <span
                                className="text-xl text-red-500 dark:text-red-400">*</span></label>
                            <textarea name="message" id="message" placeholder="motivação para a consulta"
                                      className="peer block h-28 w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700"></textarea>

                            <span
                                className="mt-1 hidden text-sm text-red-500 peer-invalid:block">Motivação para a consulta</span>
                        </div>
                    </div>

                    <p className="mb-8 text-sm text-gray-600 dark:text-gray-300">Nós respeitamos a sua privacidade e não
                        utilizaremos as suas informações pessoais para outros fins além do necessário para a prestação
                        dos nossos serviços.</p>

                    <button
                        type="submit"
                        className="relative ml-auto flex h-11 w-max items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight">
                            <span
                                className="relative text-base font-semibold text-white dark:text-gray-900">Enviar</span>
                    </button>
                </div>
            </form>
        </div>
    )
}