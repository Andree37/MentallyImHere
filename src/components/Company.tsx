export default function Company() {
    return (
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
    )
}