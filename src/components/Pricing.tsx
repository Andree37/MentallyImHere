export default function Pricing() {
    return (
        <section id="pricing" className="overflow-x-clip pt-32">
            <div className="mx-auto px-4 sm:px-12 xl:max-w-5xl xl:px-0">
                <div className="relative z-10 text-center md:mx-auto md:w-5/6 lg:w-4/6">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl xl:text-5xl">A
                        pricing for every need</h2>
                    <p className="mt-6 text-gray-700 dark:text-gray-300">Saepe nulla ab nobis itaque corporis fuga
                        illo doloribus sequi esse aspernatur impedit nihil quisquam, voluptates placeat architecto
                        adipisci id cum enim.</p>
                </div>
                <div className="relative mt-20">
                    <div aria-hidden="true"
                         className="absolute inset-0 -bottom-20 mx-auto mt-auto h-[50rem] w-[68rem] rounded-full bg-secondaryLight/50 blur-3xl dark:bg-secondary/40 md:m-auto"></div>
                    <div
                        className="m-auto items-center justify-center -space-y-4 md:flex md:space-y-0 md:-space-x-1">
                        <div
                            className="relative z-10 -mx-2 rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 dark:border-gray-700/60 dark:bg-gray-800 dark:shadow-none md:mx-0 md:w-6/12 lg:w-5/12">
                            <div className="space-y-6 p-8 sm:p-12">
                                <div className="flex items-center justify-center gap-4">
                                    <div
                                        className="flex h-16 w-16 rounded-full border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <img
                                            src="https://tailus.io/sources/blocks/comparator/preview/images/team.webp"
                                            className="m-auto h-8 w-auto" alt="organization icon" width="512"
                                            height="512"/>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Teams</h3>
                                        <p className="mt-1 text-gray-600 dark:text-gray-400">For product teams</p>
                                    </div>
                                </div>
                                <div className="relative flex justify-around">
                                    <div className="flex items-end">
                                            <span
                                                className="leading-0 text-8xl font-bold text-gray-800 dark:text-white">35</span>
                                        <div className="pb-2">
                                                <span
                                                    className="block text-2xl font-bold text-gray-700 dark:text-white">%</span>
                                            <span
                                                className="block text-xl font-bold text-primary dark:text-primaryLight">Off</span>
                                        </div>
                                    </div>
                                </div>
                                <ul role="list"
                                    className="m-auto w-max space-y-4 py-6 text-gray-600 dark:text-gray-300">
                                    <li className="space-x-2">
                                        <span className="font-semibold text-gray-500">&check;</span>
                                        <span>First premium advantage</span>
                                    </li>
                                    <li className="space-x-2">
                                        <span className="font-semibold text-gray-500">&check;</span>
                                        <span>Second advantage weekly</span>
                                    </li>
                                    <li className="space-x-2">
                                        <span className="font-semibold text-gray-500">&check;</span>
                                        <span>Third advantage donate to project</span>
                                    </li>
                                </ul>
                                <p className="mt-6 flex items-center justify-center space-x-4 text-center text-lg text-gray-600 dark:text-gray-300">
                                    <span>Call us at</span>
                                    <a href="tel:+24300"
                                       className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6"
                                             viewBox="0 0 16 16">
                                            <path
                                                d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                        </svg>
                                        <span className="font-semibold">+1 000 000</span>
                                    </a>
                                    <span>or</span>
                                </p>
                                <a href="./pages/contact.html"
                                   className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight">
                                    <span className="relative text-base font-semibold text-white dark:text-dark">Send us an Email</span>
                                </a>
                            </div>
                        </div>

                        <div
                            className="relative mx-4 rounded-3xl rounded-t-none border border-gray-700 bg-gray-800 shadow-2xl shadow-gray-600/10 dark:border-gray-100 dark:bg-white dark:shadow-none md:mx-0 md:w-6/12 md:rounded-l-none md:rounded-tl-none md:rounded-tr-3xl lg:w-7/12">
                            <div
                                className="relative p-6 pt-16 md:rounded-r-2xl md:p-8 md:pl-9 lg:p-16 lg:pl-[4.375rem]">
                                <div className="flex items-center gap-4">
                                    <div
                                        className="rounded-full bg-gradient-to-br from-primaryLight to-yellow-500 dark:from-primary dark:to-yellow-400">
                                        <div
                                            className="flex h-16 w-16 scale-[0.96] rounded-full bg-gray-900 dark:bg-white">
                                            <img
                                                src="https://tailus.io/sources/blocks/comparator/preview/images/organization.webp"
                                                className="m-auto h-8 w-auto" alt="organization icon" width="512"
                                                height="512"/>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-semibold text-white dark:text-gray-800">Organizations</h3>
                                        <p className="mt-1 text-gray-400 dark:text-gray-600">For teams with 100+
                                            employees</p>
                                    </div>
                                </div>

                                <p className="my-8 text-white dark:text-gray-700">Voluptatum iure rerum qui
                                    Voluptates dignissimos quibusdam reiciendis soluta tempore illum possimus
                                    esse.</p>

                                <div
                                    className="mb-8 grid grid-cols-2 rounded-3xl border border-gray-700 text-white dark:border-gray-200 dark:text-gray-600 [&>*]:border-gray-700 [&>*]:p-4 [&>*]:dark:border-gray-200">
                                    <div className="flex justify-center gap-2 border-b">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                             fill="currentColor" className="h-5 w-5 opacity-60">
                                            <path fillRule="evenodd"
                                                  d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        Shine
                                    </div>
                                    <div className="flex justify-center gap-2 border-b border-l">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                             fill="currentColor" className="h-5 w-5 opacity-60">
                                            <path fillRule="evenodd"
                                                  d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        Feature
                                    </div>
                                    <div className="flex justify-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                             fill="currentColor" className="h-5 w-5 opacity-60">
                                            <path fillRule="evenodd"
                                                  d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                                                  clipRule="evenodd"/>
                                            <path
                                                d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"/>
                                        </svg>
                                        Boost
                                    </div>
                                    <div className="flex justify-center gap-2 border-l">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                             fill="currentColor" className="h-5 w-5 opacity-60">
                                            <path fillRule="evenodd"
                                                  d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                                                  clipRule="evenodd"/>
                                            <path
                                                d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"/>
                                        </svg>
                                        Build
                                    </div>
                                </div>

                                <a href="./pages/contact.html"
                                   className="block rounded-2xl border border-gray-700 bg-gray-700/50 p-6 text-center dark:border-primary/20 dark:bg-primary/5 md:-mx-6 md:-mb-6 lg:-mx-12 lg:-mb-12">
                                    <span className="text-xl font-semibold text-primaryLight dark:text-primary">Contact sales</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 text-center">
                        <span className="text-sm font-semibold tracking-wider dark:text-white">TRUSTED BY YOUR FAVORED TOP TECHS COMPANIES</span>

                        <div
                            className="mt-8 flex flex-wrap justify-center gap-6 brightness-75 contrast-200 grayscale dark:brightness-200 dark:contrast-0 lg:gap-24">
                            <img className="h-8 w-auto lg:h-10 lg:w-auto" src="/images/clients/airbnb.svg"
                                 loading="lazy" alt="airbnb" width="" height=""/>
                            <img className="h-8 w-auto lg:h-10 lg:w-auto" src="/images/clients/coty.svg"
                                 loading="lazy" alt="coty" width="" height=""/>
                            <img className="h-8 w-auto lg:h-10 lg:w-auto" src="/images/clients/ge.svg"
                                 loading="lazy" alt="ge" width="" height=""/>
                            <img className="h-8 w-auto lg:h-10 lg:w-auto" src="/images/clients/lilly.png"
                                 loading="lazy" alt="lilly" width="" height=""/>
                            <img className="h-8 w-auto lg:h-10 lg:w-auto" src="/images/clients/microsoft.svg"
                                 loading="lazy" alt="microsoft" width="" height=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}