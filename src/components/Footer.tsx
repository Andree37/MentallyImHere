import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="border-t border-gray-100 pt-32 pb-8 dark:border-gray-800">
            <div>
                <div className="m-auto space-y-8 px-4 text-gray-600 dark:text-gray-400 sm:px-12 xl:max-w-6xl xl:px-0">
                    <div className="grid grid-cols-8 gap-6 md:gap-0 items-center justify-between">
                        <div className="col-span-8 md:col-span-2 lg:col-span-3">
                            <div className="flex h-full items-center justify-between gap-6 border-b border-white py-3 dark:border-gray-800 md:flex-col md:items-start md:justify-between md:space-y-6 md:border-none md:py-2">
                                <div>
                                    <a href="#home" aria-label="psiplexus logo" className="flex items-center">
                                        <Image src={'/images/logo.png'} alt="logo" width={100} height={100} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-8 md:col-span-6 lg:col-span-5">
                            <div className="flex justify-between text-sm md:pl-16">
                                <span>All rights reserved</span>
                                <Link className="text-sm text-gray-500" href="mailto:help@psiplexus.com">
                                    help@psiplexus.com
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
