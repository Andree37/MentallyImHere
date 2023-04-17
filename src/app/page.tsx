import Image from "next/image";

export default function Home() {
    return (
        <>
            <section id="home" className="pt-32 sm:pt-40 md:pt-48">
                <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                    <div className="relative">
                        <h1 className="text-center text-5xl font-bold text-blue-900 dark:text-white sm:text-6xl lg:text-left lg:text-7xl">
                            Design, Build,
                            <span className="relative">
                            <svg className="absolute inset-x-0 -bottom-1 w-full opacity-50"
                                 xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 260 15.6">
                                <style>
                                   {/* .st0 {
                                @apply fill-secondaryLight;
                                }*/}
                                </style>
                                <path className="st0"
                                      d="M206.8 7.3l-.1.3c.1-.2.2-.3.1-.3zM234.7 10h-.1c-.2.4-.1.3.1 0zM54.8 4.2l-.6-.4c.2.4.4.5.6.4zM17.1 5.1zM34.5 9.6l.1.3c0-.2 0-.3-.1-.3zM22.4 10.8c-.3-.1-.7-.1-1-.1.2.1.7.1 1 .1zM17.5 5c-.1.1-.2.1-.4.2.2-.1.3-.2.4-.2zM52.7 9.8l.5.9c-.1-.3-.3-.6-.5-.9zM19.5 11.6c-.2-.2-.4-.2-.6-.3 0 .2.3.3.6.3zM120.9 11.4c-.1.1-.2.2-.2.3.3-.1.3-.2.2-.3zM80.9 10.4h-.1s.1.1.2.1l-.1-.1zM92.6 10.4l-.2.2c.2-.1.2-.1.2-.2zM72.1 11.3c-.1.1-.3.2-.4.3l.4-.3z"/>
                                <path
                                    className="st0"
                                    d="M260 6c-1-.6-4.7-1.2-5.8.3-.2-.1.1-.3.2-.4-.9.2-2.2.1-3.6 0s-2.9-.2-4.2 0c-1 1.5-3.9-.6-4.8 1.4l.5-.4c.9.5-1.2 1.4-1.5 1.9-.8-1.2-.1-1-1-2l1.1.4-.3-1c-3.1 2.8-6.2-.9-8.2 1.1.1-.1.1-.3.2-.4-1.4-.5-2.3.8-3.3 1.2-.1-.5.6-.9 1.1-1.3-2.4-.3-6.4 1.2-9 .4-.9.7.4.9-.6 1.5-.8-.2-1.4-.7-.4-1.1-2.3-1.2-7.6 1-11.1-.2-1.8.8-.7 1.1-3.5 1.6.7-.5-.7-1.7 1-1.7l.2-.5c-2.8-.1-6.6-.3-8.1 1.2-.1-1.1-.5-.2-1.6-.8-.4.1 0 .2.2.2-1 .9-1.6-.1-2.3.1l.3-.2-2 .7c-.3-.2-.8-.4-.9-.7v.8c-1.1 0-.5-1-1.9-.8l.3.6c-.9-.4-2.2.4-2.4-.5 0-.2.1-.1.4-.1-1.3-1.2-3.5.3-5.1-.3l.4 1.3c-1.6.4-1-.3-.9-.7-1.1 0-1.3-.4-2.7-.6-.7.3-.4.5-.6.8l-1.5-.4 1-.7c-2.3 1.8-5.6-.4-7.2 1.2-.8-.4.8-.7.3-1-2.6-.9-6 1-8.2 0-3.6-1-7.8-.4-11.8-1.1l.1.3-2.9-.4c-.8.7-2.7.3-4 1.1.1-.3-.1-.7.2-.9-1.2.1-2.6.4-3.3-.1l.4-.3c-2.7-.3-6.4-.5-7.9.1-.9 0-.9-.6-1.1-1-1.6-.1-2.6.2-3.9.7-.3-.2-.7-.3-1-.6l-.6.8c-.6-.1-.1-.7-.6-.9-2.5.9-5.3-.1-7-.1l.2.4c-.7.3-2.1-.3-1.2-.7-3.4-.6-5.1 1.2-9.6.8-.6-1.5-4.1.3-4.8-1.4-1.9.4-3.2-.3-4.5.6 0-.2-.2-.2.1-.3-.8-.6-3.3-.2-5.3.2l-.1-.5c-.9 1.2-4.2.9-4.9 2-.2-.2.4-.5.7-.7-1-1.1-1.8.5-3.1.2.1-.3-.3-.6 0-.8-4.4-1.2-10.6.7-16.3-.1-1.6 0 .6 1.2-1.5 1.1-.6-.6 1-1.1-.3-1.4-.9.7-1.3.5-2.6.5.2-.4 0-.6.9-.9-.7-.5-3.1.9-4.5 0 .1.3-.2.5-.5.7-2.1 1-4.9-.9-5.1-.4 0 0-.7.2-.1.3-.8 0-1.9-.2-1.7-.7-.4.3-.8.8-1.4.8l.3-.6c-.4.1-.8.5-1.1.6l.6.4c-.9-.5-2.6.8-2.6-.4h.3l-1.7-.5c-.7.5-1.3 1-2.5.9-.5-1.3-2.9-.2-4.3-.3l.1-.4c-1.1.6-4 .4-3.5.6-1.1 0-2.6-.2-2-.6-.8.1-2.7.1-3.2.9l-1.8-1c-1 1.6-3.6-.5-3.6 1.2-1-.2-.8-.6-1.5-.9-1.4.9-2.8.8-4.2.7v-.2c-1.4-.1-3.1.8-5.1 1l-.5-1.2c-1 .2-1.3 1.2-2.3 1-.2-.2 0-.3.2-.3-1 .3-2.3.1-3.1-.2-1.5 1-2.7.7-3.9 1.8-1.3-1 1.7-.6.6-1.6-2.2-.4-4.4.4-6.7 1.1-.2-.2 0-.4.1-.7 0 0-1.2.9-2.2 1.8C.9 8.3 0 9.4.5 10c-.5.9-1.2 1.4.9 2 .6-.5 2.5-1.3 2.9-.4l.1-.9c2.6-.6.4 1.8 3.6 1.6l-.7-.3c.6-.1 1.1-.7 1.8-.5.2.2-.2.4-.5.6.9-.5 1.7-.9 2.6-1.4.1.5.1.8-.4 1.2 2.5-.2-.6-1.6 2.4-1.4.6.4-.2.6-.5.9 1.4.7 2.3-.1 3.8-.6.1.8-.9.7.3 1.2-.3-.4-.5-1.1.5-1.2-.4.8.7.4 1.6.5-.2-.3-.1-.6.2-.8.4-.1.8.1 1.4.1l-1.1-.7c1.5-.8 2.4.3 3.6.6-.1.1-.3.3-.5.3 1.2.3 2.5.9 4.1.1l-.3.1c2.9-.9-1-1.3 2.4-2.2 1.1.1-.4 2.6 2.1 1.6-1.3-.6 1.6-1.7 3.1-2L32.4 10c.6 0 1.6-.5 2-.3l-.1-.3c-.2-1.3 1.9.1 3-.7-1.3 1.8-1.4 1.5-1.6 3.2 1-1 2.2-1.9 4.1-1.8l-1.5 1.4c2.5.2 5.5-1.9 7.6-3-.5 1 .3 1.4-.6 2.2l2.4-.3-.7 1.1c1-1.2 2.1-.4 1.9-1.9-.3.2-.2.4-.7.3.1-.4.5-1.4 1.7-1.3.9.3-.5.6-.2 1 .8-.6.9.3 1.7-.1l-.8-.6c.6-.9 1.4-.1 2.2-.5-1 .4-.7.9-.3 1.4l-.1-.1c.8-.1 1.6-.7 2-.2l-.5 1.2.9-.9c.3.1.6.6 0 .8 2.8.7-.1-2.5 3.6-1.5 0 .5-.4.8-1.4.5-.2.7.1 1.1 1.1 1.4v.1c1.9 0 4.4 0 5.6-.8.4.3 0 .6-.4.9 2.1.4 2.8-.7 5 .1l-1-.4c1.4-.6 4-.8 5.3.1l-.4.3c1.3-.7 3.5.6 4 0-.6-.4 0-.6-.8-1l3.4-.7.2 1.2 1.8-.4c-.4-.5 2.4.4 2.5-.7 1 .4-.4.9-.8 1.4 1-.3 1.1.2 2.1-.5l1 1.1 2.6-.7c-.1.1 0 .2-.1.3 1.2-.9 3.1.6 4.6-.9-.1.1-.1.1-.1.2.9-.8 2.9-.2 3.7 0 1.4-.2.6-1 .6-1.4 3.9.4 2.7.3 6-.9 2 1.4-2.4 2.1.1 3 .4-.6 2.1-1.1 4.1-1.3 1.8.5 4.8.9 6.5 1.9l-.2-.9 2.6-.4-1.5 1.2c.4-.3 1.7-.8 2.6-1.2 2.7-.7 1.4 1.9 3.5.7.1.1.1.2.2.3.7-.6 2.4-.3 4.4-.5l-.7 1.1-1.3-.3c.7 1.1 2.1-.1 3.4 0 1.3-.3.7-1.3 1.4-1.6.5.1 1.2-.2 1.6.1 1.1.4.1 1.3-.3 1.8 1-1.1 1.4-.9 3.6-1.3.1.5-.1.8-.4.9.5-.1.9-.3 1.2-.8l.7.7c2.5 1 2.6-2 5.6-1.5-.8.6 2.6 0 3.5.7-1.1.1.4 1.6-.2 2.3 2.4.5 1-1.3 3-1.4l-.9 1.3c1.9-.5.5-.7 2.4-1.1-.5.4.8.4-.3.8 2.5.2 1.9.1 4.1.3l.2-1.3c.7-.1 1 .5 1.2.7-.3 0-.8-.1-.7.1.8 1.2 1.4-.6 2.4.5-.2-.4-.5-1 .4-1.1-.3.8 1.4.8 1.4 1.2-.6-.6 2-.2 2.1-1 1 .7-.4.6-.4 1.1.9-1 3.7 0 4.6-.6 0 .1.1.1.1.2 1.2-.6 3-.7 5.3-1.5l-.8.7c2.2.4 1.4-1.5 3.3-1.5-.4 1.1 3.1 0 2.2 1.2 1.1-.6 2.3-.8 3.1-1.7 1 .6-2.1 1.4-.6 1.8l1.6-.5.3.6c.1-.4 1.5-.4 1.4-.8.2.7.9 1.2.8 1.8 1-.2 2.4.5 3.3-.1l.1.3c1-1.3 3.1-.2 3.6-1.5l.6.7c1.5-.1 1.3-1.5 2-1.8.6 0 1.4-.2 2 0-2 .8 1 1.1 1.4 1.6.8 0 3.1 0 3.7-.7-1 .7-.4 1.2-2.1 1.3.9 1.3 2.6-.2 4.5-.1v.6c2.7-.4 2.8-1.5 4-2.5.3.8.1 1-.7 1.7 1.8.5 4.7-.1 6.7 0 .6.5.2.9-.5 1.1 2.1-.6 4.7.1 6-1.2-.5.5.9.3 1.6.6 0-.3.1-.6.2-.6 1.3-.6 4.1-1.1 5.6-.7l-.5.4c1.7.1 3-.5 4.3-.9 1.3-.4 2.6-.8 4.5-.4.7.3-.7 1.1.7 1 .7-.5.4-1.5 2.2-1.3l-.1.9 1.2-.9c-.7-.7-2.6-.4-1.3-1.2 1.6.8 1.3-.9 3.3 0-.4.1-1 .8-1.3 1.2 2 .4 3.4.1 4.8-.1 1.4-.3 2.8-.6 4.9-.2 2-.8 4.6-1.2 5.9-1.9 0 .9 0 1.7-.8 2.4 1.8 0 2.4-2.1 3.7-.9.7-1.3 4.7-1.2 5-3l2-.8z"
                                />
                                <path className="st0"
                                      d="M58.1 11.1c-1 0-1.9 0-2.3.2.2.2 2.3.6 2.3-.2zM208.2 13.3c-.1 0-.3.1-.4.1.1 0 .3 0 .4-.1zM216.3 12.9c-.1-.1-.2-.2-.4-.3 0 .3.1.5.4.3zM132.6 11.5zM178.5 13.7c.7-.4 1-.7 1-1-.4.1-.7.3-1 1zM163 12.6c-.1.1-.2.1-.3.2.3-.1.3-.2.3-.2zM130.2 12c.7-.4 1.6-.3 2.4-.5-.7.2-1.9-.3-2.4.5zM226.1 11.4l-.7.6.8-.4zM218.6 12c-.3-.1-1.7.3-1.3.6.4-.3.9-.5 1.3-.6zM189.6 11.4l-.3.6.7-.5z"/>
                            </svg>
                            <span
                                className="relative bg-gradient-to-r from-primary to-secondaryLight bg-clip-text text-transparent dark:from-primaryLight dark:to-secondaryLight md:px-2">Scale</span>
                        </span>
                        </h1>

                        <div className="relative items-center gap-12 lg:flex">
                            <div
                                className="text-center sm:mx-auto sm:w-11/12 md:mt-12 md:w-4/5 lg:mt-0 lg:mr-auto lg:w-6/12 lg:text-left">
                                <p className="mt-12 text-lg text-gray-600 dark:text-gray-300 sm:text-xl">Computers used
                                    to be magical. But much of that magic has been lost over time, replaced by subpar
                                    tools and practices that slow teams down and hold great work back.</p>
                                <form action="" className="mt-12">
                                    <div
                                        className="relative flex items-center rounded-full border border-primary/20 bg-white p-1 px-2 shadow-md focus-within:ring-2 dark:border-white/10 dark:bg-dark md:p-2 lg:pr-3">
                                        <div className="py-3 pl-4 lg:pl-5">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 className="m-auto h-6 w-6 fill-gray-500 dark:fill-gray-400"
                                                 viewBox="0 0 20 20" fill="currentColor">
                                                <path
                                                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                                            </svg>
                                        </div>
                                        <input aria-label="your email" autoComplete="email"
                                               placeholder="Your mail address"
                                               className="w-full rounded-full bg-transparent p-4 placeholder-gray-600 outline-none dark:text-white dark:placeholder-white"
                                               type="email"/>
                                        <div className="md:pr-1.5 lg:pr-0">
                                            <button type="button" title="Start buying"
                                                    className="relative ml-auto h-12 w-16 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight sm:w-auto sm:px-6">
                                                <span
                                                    className="relative hidden w-max font-semibold text-white dark:text-gray-900 md:block"> Get Started </span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                     fill="currentColor"
                                                     className="relative mx-auto h-6 w-6 text-white dark:text-gray-900 md:hidden">
                                                    <path
                                                        d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <div className="mt-12 hidden lg:block">
                                    <span className="text-gray-700 dark:text-white">From the most talented <a
                                        href="customers.html"
                                        className="text-primary underline dark:text-primaryLight">Team</a> !</span>
                                    <div
                                        className="mt-5 flex -space-x-1 children:h-10 children:w-10 children:rounded-full children:object-cover children:ring-4 children:ring-gray-100 dark:children:ring-gray-900">
                                        <Image src="/images/avatars/avatar.webp" alt="user avatar" width="400"
                                               height="400"/>
                                        <Image src="/images/avatars/avatar-1.webp" alt="user avatar" width="200"
                                               height="200"/>
                                        <Image src="/images/avatars/avatar-2.webp" alt="user avatar" width="200"
                                               height="200"/>
                                        <Image src="/images/avatars/avatar-3.webp" alt="user avatar" width="200"
                                               height="200"/>
                                        <Image src="/images/avatars/avatar-4.webp" alt="user avatar" width="200"
                                               height="200"/>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 w-full overflow-hidden sm:mt-20 lg:-mt-8 lg:w-6/12">
                                <Image className="w-full" src="/images/team.svg" alt="project illustration"
                                       height="600" width="800"/>
                            </div>
                        </div>
                        <div
                            className="mt-12 border-y border-gray-100 py-8 text-center dark:border-gray-800 md:py-12 xl:mt-20">
                            <a href="customers.html"
                               className="text-sm font-semibold tracking-wider text-gray-800 dark:text-white">TRUSTED BY
                                YOUR FAVORED TOP TECHS COMPANIES</a>
                            <div
                                className="mt-8 flex flex-wrap justify-center gap-6 brightness-75 contrast-200 grayscale dark:brightness-200 dark:contrast-0 sm:justify-between lg:gap-24">
                                <img className="h-8 w-auto lg:h-10 lg:w-auto" src="/images/clients/airbnb.svg"
                                     loading="lazy" alt="airbnb" width="" height=""/>
                                <img className="h-8 w-auto lg:h-10 lg:w-auto" src="/images/clients/coty.svg"
                                     loading="lazy" alt="bissell" width="" height=""/>
                                <img className="h-8 w-auto lg:h-10 lg:w-auto" src="/images/clients/ge.svg"
                                     loading="lazy" alt="ge" width="100" height="100"/>
                                <img className="h-8 w-auto lg:h-10 lg:w-auto" src="/images/clients/lilly.png"
                                     loading="lazy" alt="lilly" width="" height=""/>
                                <img className="h-8 w-auto lg:h-10 lg:w-auto" src="/images/clients/microsoft.svg"
                                     loading="lazy" alt="microsoft" width="" height=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="solutions" className="pt-32">
                <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">For
                            growing teams and organizations</h2>
                        <p className="mx-auto mt-6 text-gray-700 dark:text-gray-300 md:w-3/4 lg:w-3/5">A growing team
                            doesn't need to mean growing pains. Privacy, and the right tool for every step of your
                            journey - Jira Software friction - company size.</p>

                        <div role="tablist" aria-label="tabs"
                             className="relative mx-auto mt-12 grid h-12 w-auto grid-cols-3 items-center gap-x-1 overflow-hidden rounded-full border border-gray-200 bg-gray-100 px-[3px] text-gray-600 dark:border-gray-700 dark:border-opacity-60 dark:bg-darker dark:text-gray-300 dark:shadow-none sm:w-max">
                            <div
                                className="tab-indicator absolute h-10 rounded-full bg-white shadow-md transition-[left] duration-500 dark:bg-gray-800"></div>
                            <button role="tab" aria-selected="true" aria-controls="panel-0" tabIndex={0}
                                    title="tab item"
                                    className="tab relative block rounded-full py-2.5 px-4 hover:text-primary dark:hover:text-primaryLight">
                                <span className="m-auto block w-max text-sm font-medium tracking-wider">First Tab</span>
                            </button>
                            <button role="tab" aria-selected="false" aria-controls="panel-1" tabIndex={-1}
                                    title="tab item"
                                    className="tab relative block rounded-full py-2.5 px-4 hover:text-primary dark:hover:text-primaryLight">
                                <span
                                    className="m-auto block w-max text-sm font-medium tracking-wider">Second Tab</span>
                            </button>
                            <button role="tab" aria-selected="false" aria-controls="panel-2" tabIndex={-1}
                                    title="tab item"
                                    className="tab relative block rounded-full py-2.5 px-4 hover:text-primary dark:hover:text-primaryLight">
                                <span className="m-auto block w-max text-sm font-medium tracking-wider">Third Tab</span>
                            </button>
                        </div>
                    </div>
                    <div className="mt-20">
                        <div className="gap-6 space-y-12 md:flex md:space-y-0">
                            <div className="relative md:w-1/2">
                                <div
                                    className="panel visible inset-0 flex scale-100 flex-col justify-center opacity-100 transition duration-500 md:absolute"
                                    id="panel-0">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">Make
                                            work flow across teams while connecting back to company goals</h3>
                                        <p className="mt-8 text-gray-600 dark:text-gray-300">Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo
                                            perspiciatis delectus atque autem! repellat expedita consequatur! Officiis
                                            id consequatur atque doloremque!</p>
                                        <div className="mt-12 space-y-6">
                                            <div className="flex items-center gap-6">
                                                <div
                                                    className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                                                    <img className="m-auto h-8 w-auto"
                                                         src="https://cdn-icons-png.flaticon.com/512/4727/4727266.png"
                                                         alt="icon illustration" loading="lazy" width="512"
                                                         height="512"/>
                                                </div>
                                                <div className="w-[calc(100%-7.5rem)]">
                                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Together
                                                        as one</h4>
                                                    <p className="mt-1 text-gray-600 dark:text-gray-400">Accusantium
                                                        nemo perspiciatis delectus atque autem!</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-6">
                                                <div
                                                    className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                                                    <img className="m-auto h-8 w-auto"
                                                         src="https://cdn-icons-png.flaticon.com/512/584/584796.png"
                                                         alt="icon illustration" loading="lazy" width="512"
                                                         height="512"/>
                                                </div>
                                                <div className="w-[calc(100%-7.5rem)]">
                                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">New
                                                        ideas</h4>
                                                    <p className="mt-1 text-gray-600 dark:text-gray-400">Accusalectus
                                                        atque autem accusantium nemo perspiciatis delectus atque
                                                        autem!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="panel invisible absolute inset-0 flex scale-90 flex-col justify-center opacity-0 transition duration-500"
                                    id="panel-1">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">Make
                                            work flow across teams while connecting back to company goals</h3>
                                        <p className="mt-8 text-gray-600 dark:text-gray-300">Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo
                                            perspiciatis delectus atque autem! repellat expedita consequatur! Officiis
                                            id consequatur atque doloremque!</p>
                                        <div className="mt-12 space-y-6">
                                            <div className="flex items-center gap-6">
                                                <div
                                                    className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                                                    <img className="m-auto h-8 w-auto"
                                                         src="https://cdn-icons-png.flaticon.com/512/6106/6106288.png"
                                                         alt="icon illustration" loading="lazy" width="512"
                                                         height="512"/>
                                                </div>
                                                <div className="w-[calc(100%-7.5rem)]">
                                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Together
                                                        as one</h4>
                                                    <p className="mt-1 text-gray-600 dark:text-gray-400">Accusantium
                                                        nemo perspiciatis delectus atque autem!</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-6">
                                                <div
                                                    className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                                                    <img className="m-auto h-8 w-auto"
                                                         src="https://cdn-icons-png.flaticon.com/512/2313/2313906.png"
                                                         alt="icon illustration" loading="lazy" width="512"
                                                         height="512"/>
                                                </div>
                                                <div className="w-[calc(100%-7.5rem)]">
                                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">New
                                                        ideas</h4>
                                                    <p className="mt-1 text-gray-600 dark:text-gray-400">Accusalectus
                                                        atque autem accusantium nemo perspiciatis delectus atque
                                                        autem!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="panel invisible absolute inset-0 flex scale-90 flex-col justify-center opacity-0 transition duration-500"
                                    id="panel-2">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">Make
                                            work flow across teams while connecting back to company goals</h3>
                                        <p className="mt-8 text-gray-600 dark:text-gray-300">Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo
                                            perspiciatis delectus atque autem! repellat expedita consequatur! Officiis
                                            id consequatur atque doloremque!</p>
                                        <div className="mt-12 space-y-6">
                                            <div className="flex items-center gap-6">
                                                <div
                                                    className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                                                    <img className="m-auto h-8 w-auto"
                                                         src="https://cdn-icons-png.flaticon.com/512/3340/3340200.png"
                                                         alt="icon illustration" loading="lazy" width="512"
                                                         height="512"/>
                                                </div>
                                                <div className="w-[calc(100%-7.5rem)]">
                                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Together
                                                        as one</h4>
                                                    <p className="mt-1 text-gray-600 dark:text-gray-400">Accusantium
                                                        nemo perspiciatis delectus atque autem!</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-6">
                                                <div
                                                    className="flex h-20 w-20 rounded-3xl border border-gray-200 bg-white p-4 dark:border-gray-600/60 dark:bg-gray-900/40">
                                                    <img className="m-auto h-8 w-auto"
                                                         src="https://cdn-icons-png.flaticon.com/512/5405/5405929.png"
                                                         alt="icon illustration" loading="lazy" width="512"
                                                         height="512"/>
                                                </div>
                                                <div className="w-[calc(100%-7.5rem)]">
                                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Growth</h4>
                                                    <p className="mt-1 text-gray-600 dark:text-gray-400">Accusalectus
                                                        atque autem accusantium nemo perspiciatis delectus atque
                                                        autem!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
                                <div
                                    className="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200 dark:bg-gray-800 dark:before:border-gray-700 dark:after:border-gray-700">
                                    <div className="relative h-96 overflow-clip py-10 sm:h-[32rem] lg:p-20">
                                        <div data-target="panel-0"
                                             className="panel-preview absolute inset-0 z-10 flex translate-y-0 scale-100 items-end overflow-hidden px-6 opacity-100 transition duration-500 sm:px-10">
                                            <img src="/images/screenshots/tailus-home.webp"
                                                 className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]"
                                                 alt="tailus screenshot" loading="lazy" width="850" height="1926"/>
                                        </div>
                                        <div data-target="panel-1"
                                             className="panel-preview absolute inset-0 z-0 flex translate-y-[100%] scale-100 items-end overflow-hidden px-6 opacity-50 transition duration-500 sm:px-10">
                                            <img src="/images/screenshots/tailus-home-dark.webp"
                                                 className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]"
                                                 alt="tailus screenshot dark-mode" loading="lazy" width="850"
                                                 height="1780"/>
                                        </div>
                                        <div data-target="panel-2"
                                             className="panel-preview absolute inset-0 z-0 flex translate-y-[100%] scale-100 items-end overflow-hidden px-6 opacity-50 transition duration-500 sm:px-10">
                                            <img src="/images/screenshots/tailus-contact.webp"
                                                 className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]"
                                                 alt="tailus contact screenshot" loading="lazy" width="850"
                                                 height="1780"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="company" className="pt-16 md:pt-32">
                <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                    <div className="items-center justify-center space-y-6 md:flex md:gap-6 md:space-y-0">
                        <div className="md:w-1/2 lg:w-3/5">
                            <img className="h-full rounded-3xl object-cover md:-ml-8"
                                 src="/images/hero-stats-login.webp" alt="tailus components" loading="lazy"
                                 width="1865" height="1750"/>
                        </div>
                        <div className="md:w-1/2">
                            <span
                                className="text-sm font-semibold uppercase tracking-widest text-primary dark:text-secondaryLight">Company</span>
                            <h2 className="my-8 text-4xl font-bold text-gray-900 dark:text-white lg:text-5xl">Help great
                                teams become <span
                                    className="bg-gradient-to-r from-primaryLight to-secondaryLight bg-clip-text text-transparent">dream teams</span>
                            </h2>
                            <p className="mb-4 text-gray-600 dark:text-gray-300">Asperiores nemo possimus nesciunt dicta
                                veniam aspernatur quam mollitia.</p>
                            <p className="text-gray-600 dark:text-gray-300">Nobis minus voluptatibus pariatur
                                dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta
                                veniam aspernatur quam mollitia. Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Fugit alias sapiente maxime repellendus impedit commodi blanditiis debitis rerum,
                                quisquam aspernatur quod aliquid molestiae eveniet suscipit, natus dolore? Vero, eum
                                voluptatem?</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="features" className="relative mb-32 pt-32">
                <div aria-hidden="true"
                     className="absolute inset-0 top-60 grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-30">
                    <div
                        className="h-60 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700"></div>
                    <div
                        className="h-40 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
                </div>
                <div className="relative mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-gray-800 dark:text-white xl:text-5xl">A technology-first
                            approach</h2>
                        <p className="mx-auto mt-6 text-gray-700 dark:text-gray-300 md:w-3/4 lg:w-3/5">A growing team
                            doesn't need to mean growing pains. Privacy, and the right tool for every step of your
                            journey - Jira Software friction - company size.</p>
                    </div>
                    <div className="mt-16 grid gap-8 sm:mx-auto sm:w-2/3 md:w-full md:grid-cols-2 lg:grid-cols-3">
                        <div
                            className="rounded-3xl border border-gray-100 bg-white p-8 py-12 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-12">
                            <div className="space-y-12 text-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/584/584796.png"
                                     className="mx-auto h-14 w-auto" width="512" height="512"
                                     alt="burger illustration"/>
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-semibold text-gray-800 transition dark:text-white">First
                                        feature</h3>
                                    <p className="text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet
                                        consectetur, adipisicing elit. Saepe nesciunt neque culpa hic illum ab qui error
                                        repellendus asperiores unde ut ipsam perferendis nemo fuga cum, eum consectetur,
                                        magnam doloremque!</p>
                                    <a aria-label="read more" href="#"
                                       className="group relative mx-auto flex h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                             className="-transtransition-transform relative h-5 w-5 text-gray-600 duration-300 group-hover:translate-x-1 dark:text-white">
                                            <path fillRule="evenodd"
                                                  d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="rounded-3xl border border-gray-100 bg-white p-8 py-12 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-12">
                            <div className="space-y-12 text-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/6106/6106288.png"
                                     className="mx-auto h-14 w-auto" width="512" height="512"
                                     alt="burger illustration"/>
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-semibold text-gray-800 transition dark:text-white">Second
                                        feature</h3>
                                    <p className="text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet
                                        consectetur, adipisicing elit. Saepe nesciunt neque culpa hic illum ab qui error
                                        repellendus asperiores unde ut ipsam perferendis nemo fuga cum, eum consectetur,
                                        magnam doloremque!</p>
                                    <a aria-label="read more" href="#"
                                       className="group relative mx-auto flex h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                             className="relative h-5 w-5 text-gray-600 transition duration-300 group-hover:translate-x-1 dark:text-white">
                                            <path fillRule="evenodd"
                                                  d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="rounded-3xl border border-gray-100 bg-white p-8 py-12 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-12">
                            <div className="space-y-12 text-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/4727/4727266.png"
                                     className="mx-auto h-14 w-auto" width="512" height="512"
                                     alt="burger illustration"/>
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-semibold text-gray-800 transition dark:text-white">Third
                                        feature</h3>
                                    <p className="text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet
                                        consectetur, adipisicing elit. Saepe nesciunt neque culpa hic illum ab qui error
                                        repellendus asperiores unde ut ipsam perferendis nemo fuga cum, eum consectetur,
                                        magnam doloremque!</p>
                                    <a aria-label="read more" href="#"
                                       className="group relative mx-auto flex h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                             className="relative h-5 w-5 text-gray-600 transition duration-300 group-hover:translate-x-1 dark:text-white">
                                            <path fillRule="evenodd"
                                                  d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="relative before:absolute before:inset-0 before:h-px before:w-96 before:bg-gradient-to-r before:from-yellow-300 before:via-pink-400 before:to-transparent after:absolute after:inset-0 after:ml-auto after:mt-auto after:h-px after:w-96 after:bg-gradient-to-l after:from-yellow-300 after:via-pink-400 after:to-transparent">
                <div className="border-y border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-darker">
                    <div className="relative mx-auto px-6 md:max-w-full md:px-12 lg:max-w-6xl xl:px-0">
                        <div className="items-end justify-between md:flex">
                            <div className="h-max py-16 md:w-6/12 xl:w-5/12">
                                <div className="text-center md:text-left">
                                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:w-max md:text-4xl xl:text-5xl">
                                        One step to improve <br/>
                                        your workflow
                                    </h2>
                                    <p className="mb-8 mt-6 text-gray-600 dark:text-gray-300">Praesentium, atque
                                        exercitationem dolorum, iste libero eaque animi illum magnam velit iusto quidem
                                        omnis quas! Ad expedita quaerat.</p>
                                    <form action="" className="mt-12">
                                        <div
                                            className="relative flex items-center rounded-full border border-primary/20 bg-white p-1 px-2 shadow-md focus-within:ring-2 dark:border-white/10 dark:bg-dark dark:text-white md:p-2 lg:pr-3">
                                            <div className="py-3 pl-4 lg:pl-5">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                     className="m-auto h-6 w-6 fill-gray-500 dark:fill-gray-400"
                                                     viewBox="0 0 20 20" fill="currentColor">
                                                    <path
                                                        d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                                                </svg>
                                            </div>
                                            <input autoComplete="email" aria-label="your email"
                                                   placeholder="Your mail address"
                                                   className="w-full rounded-full bg-transparent p-4 placeholder-gray-600 outline-none dark:placeholder-white"
                                                   type="email"/>
                                            <div className="md:pr-1.5 lg:pr-0">
                                                <button type="button" title="Start buying"
                                                        className="relative ml-auto h-12 w-16 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight sm:w-auto sm:px-6">
                                                    <span
                                                        className="relative hidden w-max font-semibold text-white dark:text-gray-900 md:block"> Get Started </span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                         fill="currentColor"
                                                         className="relative mx-auto h-6 w-6 text-white dark:text-gray-900 md:hidden">
                                                        <path
                                                            d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="md:w-[42%] lg:w-1/2">
                                <img src="/images/cta-cards.webp" alt="tailus stat cards components"
                                     loading="lazy" width="1299" height="678"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonials" className="pt-32">
                <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">Trusted
                            by leaders</h2>
                        <p className="mx-auto mt-6 text-gray-700 dark:text-gray-300 md:w-3/4 lg:w-3/5">A growing team
                            doesn't need to mean growing pains. Privacy, and the right tool for every step of your
                            journey - Jira Software friction - company size.</p>
                    </div>
                    <div className="mt-12 grid gap-8 md:grid-cols-2">
                        <div
                            className="rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:col-span-2 sm:px-12 lg:col-span-1 lg:row-span-2">
                            <div className="flex h-full flex-col justify-center space-y-6 md:space-y-8">
                                <img className="mr-auto h-12 w-auto" src="/images/clients/microsoft.svg"
                                     loading="lazy" alt="microsoft"/>
                                <p className="text-gray-600 dark:text-gray-300 md:text-lg lg:text-xl">
                                    <span className="font-serif">"</span> Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto
                                    aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum
                                    deleniti repudiandae ad doloribus. <br/>
                                    <br/>
                                    Esse, sint sit aut ducimus ea ipsam velit saepe earum dolorem, dignissimos minima
                                    voluptate quo accusamus corporis, quaerat beatae aliquid. Impedit, accusamus. <span
                                    className="font-serif">"</span>
                                </p>
                                <div className="flex items-center gap-3">
                                    <img className="h-12 w-12 rounded-full" src="/images/avatars/avatar-2.webp"
                                         loading="lazy" alt="user avatar" width="200" height="200"/>
                                    <div>
                                        <h3 className="text-lg font-semibold leading-none text-gray-600 dark:text-gray-200">Andy
                                            Doe</h3>
                                        <span
                                            className="text-sm text-gray-500 dark:text-gray-400">Product Designer</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="space-y-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
                            <img className="h-12 w-auto" src="/images/clients/airbnb.svg" loading="lazy"
                                 alt="airbnb" width="" height=""/>
                            <p className="text-gray-600 dark:text-gray-300"><span className="font-serif">"</span>Sit
                                amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est.
                                Provident, omnis ut, sapiente veritatis cum deleniti repudiandae ad doloribus. <span
                                    className="font-serif">"</span></p>
                            <div className="flex items-center gap-3 text-left">
                                <img className="h-12 w-12 rounded-full" src="/images/avatars/avatar-3.webp"
                                     alt="user avatar" width="200" height="200" loading="lazy"/>
                                <div>
                                    <h3 className="text-lg font-semibold leading-none text-gray-600 dark:text-gray-200">Janet
                                        Doe</h3>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">UX Designer</span>
                                </div>
                            </div>
                        </div>
                        <div
                            className="space-y-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
                            <img className="h-12 w-auto" src="/images/clients/ge.svg" loading="lazy" alt="ge"/>
                            <p className="text-gray-600 dark:text-gray-300"><span className="font-serif">"</span>Sit
                                amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est.
                                Provident, omnis ut, sapiente veritatis cum deleniti repudiandae ad doloribus. <span
                                    className="font-serif">"</span></p>
                            <div className="flex items-center gap-3 text-left">
                                <img className="h-12 w-12 rounded-full" src="/images/avatars/avatar-4.webp"
                                     alt="user avatar" width="200" height="200" loading="lazy"/>
                                <div>
                                    <h3 className="text-lg font-semibold leading-none text-gray-600 dark:text-gray-200">John
                                        Doe</h3>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Product Designer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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

            <section id="faqs" className="my-32">
                <div className="mx-auto px-4 sm:px-12 xl:max-w-5xl xl:px-0">
                    <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">Frequently
                        Asqued Questions</h2>

                    <div
                        className="divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800">
                        <div>
                            <dl className="faq mx-auto max-w-2xl">
                                <dt className="text-lg">
                                    <button type="button"
                                            className="flex w-full items-start justify-between py-6 text-left text-gray-400"
                                            aria-controls="faq-0" data-active="false">
                                        <span className="font-medium text-gray-900 dark:text-white">What included in the pack ?</span>
                                        <span className="ml-6 flex h-7 items-center">
                                        <svg className="arrow-down h-6 w-6 rotate-0 transform duration-300"
                                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                                        </svg>
                                    </span>
                                    </button>
                                </dt>
                                <dd className="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out"
                                    id="faq-0">
                                    <p className="pb-6 text-base text-gray-600 dark:text-gray-400">Lorem ipsum, dolor
                                        sit amet consectetur adipisicing elit. Laborum quod pariatur possimus at fugit
                                        natus aspernatur molestiae. Velit, odio modi provident necessitatibus molestias
                                        qui voluptatibus similique magnam a nam rem!</p>
                                </dd>
                            </dl>
                        </div>
                        <div>
                            <dl className="faq mx-auto max-w-2xl">
                                <dt className="text-lg">
                                    <button type="button"
                                            className="flex w-full items-start justify-between py-6 text-left text-gray-400"
                                            aria-controls="faq-1" data-active="false">
                                        <span className="font-medium text-gray-900 dark:text-white">What included in the pack ?</span>
                                        <span className="ml-6 flex h-7 items-center">
                                        <svg className="arrow-down h-6 w-6 rotate-0 transform duration-300"
                                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                                        </svg>
                                    </span>
                                    </button>
                                </dt>
                                <dd className="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out"
                                    id="faq-1">
                                    <p className="pb-6 text-base text-gray-600 dark:text-gray-400">Lorem ipsum, dolor
                                        sit amet consectetur adipisicing elit. Laborum quod pariatur possimus at fugit
                                        natus aspernatur molestiae. Velit, odio modi provident necessitatibus molestias
                                        qui voluptatibus similique magnam a nam rem!</p>
                                </dd>
                            </dl>
                        </div>
                        <div>
                            <dl className="faq mx-auto max-w-2xl">
                                <dt className="text-lg">
                                    <button type="button"
                                            className="flex w-full items-start justify-between py-6 text-left text-gray-400"
                                            aria-controls="faq-2" data-active="false">
                                        <span className="font-medium text-gray-900 dark:text-white">What included in the pack ?</span>
                                        <span className="ml-6 flex h-7 items-center">
                                        <svg className="arrow-down h-6 w-6 rotate-0 transform duration-300"
                                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                                        </svg>
                                    </span>
                                    </button>
                                </dt>
                                <dd className="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out"
                                    id="faq-2">
                                    <p className="pb-6 text-base text-gray-600 dark:text-gray-400">Lorem ipsum, dolor
                                        sit amet consectetur adipisicing elit. Laborum quod pariatur possimus at fugit
                                        natus aspernatur molestiae. Velit, odio modi provident necessitatibus molestias
                                        qui voluptatibus similique magnam a nam rem!</p>
                                </dd>
                            </dl>
                        </div>
                        <div>
                            <dl className="faq mx-auto max-w-2xl">
                                <dt className="text-lg">
                                    <button type="button"
                                            className="flex w-full items-start justify-between py-6 text-left text-gray-400"
                                            aria-controls="faq-4" data-active="false">
                                        <span className="font-medium text-gray-900 dark:text-white">Are updates included in this pack ?</span>
                                        <span className="ml-6 flex h-7 items-center">
                                        <svg className="arrow-down h-6 w-6 rotate-0 transform duration-300"
                                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                                        </svg>
                                    </span>
                                    </button>
                                </dt>
                                <dd className="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out"
                                    id="faq-4">
                                    <p className="pb-6 text-base text-gray-600 dark:text-gray-400">Lorem ipsum, dolor
                                        sit amet consectetur adipisicing elit. Laborum quod pariatur possimus at fugit
                                        natus aspernatur molestiae. Velit, odio modi provident necessitatibus molestias
                                        qui voluptatibus similique magnam a nam rem!</p>
                                </dd>
                            </dl>
                        </div>
                        <div>
                            <dl className="faq mx-auto max-w-2xl">
                                <dt className="text-lg">
                                    <button type="button"
                                            className="flex w-full items-start justify-between py-6 text-left text-gray-400"
                                            aria-controls="faq-5" data-active="false">
                                        <span className="font-medium text-gray-900 dark:text-white">What included in the pack ?</span>
                                        <span className="ml-6 flex h-7 items-center">
                                        <svg className="arrow-down h-6 w-6 rotate-0 transform duration-300"
                                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                                        </svg>
                                    </span>
                                    </button>
                                </dt>
                                <dd className="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out"
                                    id="faq-5">
                                    <p className="pb-6 text-base text-gray-600 dark:text-gray-400">Lorem ipsum, dolor
                                        sit amet consectetur adipisicing elit. Laborum quod pariatur possimus at fugit
                                        natus aspernatur molestiae. Velit, odio modi provident necessitatibus molestias
                                        qui voluptatibus similique magnam a nam rem!</p>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
