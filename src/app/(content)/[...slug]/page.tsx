export default function NotFound() {
    return (
        <div>
            <div className="mx-auto px-4 pt-56 sm:px-12 xl:max-w-6xl xl:px-0">
                <div className="relative z-10 lg:w-2/3">
                    <div className="flex flex-col">
                            <span
                                className="bg-gradient-to-b from-orange-400 to-secondary bg-clip-text font-mono text-5xl font-bold text-transparent sm:text-6xl lg:text-8xl"> 404 </span>
                        <h1 className="mb-20 mt-12 text-4xl font-bold text-gray-700 dark:text-white md:text-5xl">Esta
                            página não existe. . .</h1>
                        <a href=".."
                           className="relative flex h-9 w-max items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-primaryLight lg:before:border lg:before:border-gray-200 lg:before:bg-gray-100 lg:dark:before:bg-gray-800">
                                <span
                                    className="relative text-sm font-semibold text-white dark:text-gray-900 lg:text-primary lg:dark:text-white">Go back home</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
