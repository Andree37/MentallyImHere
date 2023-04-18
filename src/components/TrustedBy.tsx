export function TrustedBy() {
    return (
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
    )
}