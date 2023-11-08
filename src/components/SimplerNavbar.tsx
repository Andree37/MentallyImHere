"use client"
import React from "react";
import Image from "next/image";

export default function SimplerNavbar() {
    return (
        <>
            <nav id="simpler-navbar"
                 className="fixed inset-x-0 z-20 w-screen border-b border-gray-100 bg-white/80 backdrop-blur dark:border-gray-700/30 dark:bg-gray-900/80">
                <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                    <div className="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 lg:py-4">
                        <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
                            <a href={'/'} aria-label="psiplexus logo" className="nav-link flex items-center space-x-2">
                                <Image src={'/images/logo.png'} alt='logo' width={130} height={130}/>
                            </a>
                            
                        </div>
                        <div aria-hidden="true" id="layer"
                             className="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-gray-900/70 lg:hidden"></div>
                    </div>
                </div>
            </nav>
        </>
    );
}
