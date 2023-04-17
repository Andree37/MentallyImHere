import Image from "next/image";

export default function Contact() {
    return (
        <section className="py-32 sm:pt-40 md:pt-48 lg:pt-56">
            <div className="mx-auto px-4 sm:px-12 xl:max-w-5xl xl:px-0">
                <div className="relative z-10 text-center md:mx-auto md:w-5/6 lg:w-4/6">
                    <h1 className="relative text-center text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">Start
                        building <span className="opacity-80">here.</span></h1>
                    <p className="mt-6 text-gray-700 dark:text-gray-300">We'll help you find the right plan and pricing
                        for your business.</p>
                </div>

                <div className="mt-12 grid gap-12 sm:mx-auto sm:max-w-lg lg:max-w-max lg:grid-cols-2">
                    <div className="relative">
                        <form action=""
                              className="relative rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-12">
                            <div
                                className="absolute inset-0 hidden scale-105 rounded-3xl bg-gradient-to-b from-transparent dark:block dark:to-gray-900/80"></div>
                            <div className="relative">
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">What should we know
                                    ?</h2>
                                <div className="mt-8 mb-6 space-y-4">
                                    <div>
                                        <label htmlFor="name" className="mb-2 block text-gray-600 dark:text-gray-300">Your
                                            name <span
                                                className="text-xl text-red-500 dark:text-red-400">*</span></label>
                                        <input type="text" name="name" id="name" autoComplete="name"
                                               className="peer block w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700"/>
                                        <span
                                            className="mt-1 hidden text-sm text-red-500 peer-invalid:block">Helper</span>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="mb-2 block text-gray-600 dark:text-gray-300">Work
                                            email <span
                                                className="text-xl text-red-500 dark:text-red-400">*</span></label>
                                        <input type="email" name="email" id="email" autoComplete="email"
                                               className="peer block w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700"/>
                                        <span
                                            className="mt-1 hidden text-sm text-red-500 peer-invalid:block">Helper</span>
                                    </div>
                                    <div>
                                        <label htmlFor="phone"
                                               className="mb-2 block text-gray-600 dark:text-gray-300">Phone <span
                                            className="text-xl text-red-500 dark:text-red-400">*</span></label>
                                        <input type="tel" name="phone" id="phone" autoComplete="tel"
                                               className="peer block w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700"/>
                                        <span
                                            className="mt-1 hidden text-sm text-red-500 peer-invalid:block">Helper</span>
                                    </div>
                                    <div>
                                        <label htmlFor="company"
                                               className="mb-2 block text-gray-600 dark:text-gray-300">Company
                                            name <span
                                                className="text-xl text-red-500 dark:text-red-400">*</span></label>
                                        <input type="text" name="company" id="company" autoComplete="work"
                                               className="peer block w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700"/>
                                        <span
                                            className="mt-1 hidden text-sm text-red-500 peer-invalid:block">Helper</span>
                                    </div>
                                    <div>
                                        <label htmlFor="message"
                                               className="mb-2 block text-gray-600 dark:text-gray-300">Message</label>
                                        <textarea name="message" id="message"
                                                  className="peer block h-28 w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-gray-600 transition-shadow duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 dark:border-gray-700"></textarea>

                                        <span
                                            className="mt-1 hidden text-sm text-red-500 peer-invalid:block">Helper</span>
                                    </div>
                                </div>

                                <p className="mb-8 text-sm text-gray-600 dark:text-gray-300">By clicking submit below,
                                    you agree to the processing of your personal information by PlanetScale as described
                                    in the Privacy Policy.</p>

                                <button type="submit"
                                        className="relative ml-auto flex h-11 w-max items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight">
                                    <span className="relative text-base font-semibold text-white dark:text-gray-900">Get started</span>
                                </button>
                            </div>
                        </form>
                    </div>

                    <div>
                        <div
                            className="relative rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:px-12">
                            <div
                                className="absolute inset-0 hidden scale-105 rounded-3xl bg-gradient-to-b from-transparent dark:block dark:to-gray-900/80"></div>
                            <div className="relative">
                                <Image className="h-12 w-auto dark:contrast-100 dark:grayscale dark:invert"
                                       src="/images/clients/microsoft.svg" alt="microsoft" width="260" height="96"/>
                                <p className="mt-2 mb-8 text-gray-600 dark:text-gray-300">Lorem ipsum dolor laboriosam
                                    deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero
                                    voluptas veniam at reprehenderit, veritatis harum et rerum.</p>
                                <div className="flex gap-4">
                                    <Image className="h-12 w-12 rounded-full" src="/images/avatars/avatar-2.webp"
                                           alt="user avatar" width="200" height="200" loading="lazy"/>
                                    <div>
                                        <h2 className="leading-0 text-lg font-medium text-gray-700 dark:text-white">Randy
                                            Doe</h2>
                                        <p className="leading-0 -mt-0.5 text-sm text-gray-500 dark:text-gray-400">Backend
                                            dev</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 text-center">
                            <span className="text-sm font-semibold tracking-widest dark:text-white">TRUSTED BY TOP TECHS COMPANIES</span>

                            <div
                                className="mt-8 flex flex-wrap justify-center gap-6 brightness-75 contrast-200 grayscale dark:brightness-200 dark:contrast-0 lg:gap-x-24">
                                <Image className="h-8 w-auto lg:h-10 lg:w-auto" src="/images/clients/airbnb.svg"
                                       loading="lazy" alt="airbnb" width="10" height="10"/>
                                <Image className="h-8 w-auto lg:h-10 lg:w-auto" src="/images/clients/coty.svg"
                                       loading="lazy" alt="coty" width="10" height="10"/>
                                <Image className="h-8 w-auto lg:h-10 lg:w-auto" src="/images/clients/ge.svg"
                                       loading="lazy" alt="ge" width="10" height="10"/>
                                <Image className="h-8 w-auto lg:h-10 lg:w-auto" src="/images/clients/lilly.png"
                                       loading="lazy" alt="lilly" width="10" height="10"/>
                                <Image className="h-8 w-auto lg:h-10 lg:w-auto" src="/images/clients/microsoft.svg"
                                       loading="lazy" alt="microsoft" width="10" height="10"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}