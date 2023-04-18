export default function InfoForm() {
    return (
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
                            <label htmlFor="email" className="mb-2 block text-gray-600 dark:text-gray-300">Email <span
                                className="text-xl text-red-500 dark:text-red-400">*</span></label>
                            <input type="email" name="email" id="email" autoComplete="email"
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
                            <span
                                className="relative text-base font-semibold text-white dark:text-gray-900">Get started</span>
                    </button>
                </div>
            </form>
        </div>
    )
}