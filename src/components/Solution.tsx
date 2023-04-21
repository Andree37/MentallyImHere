import Script from "next/script";
import Image from "next/image";

export default function Solution() {
    return (
        <>
            <Script>
                {`let tabs = document.querySelectorAll(".tab");
let indicator = document.querySelector(".tab-indicator");
let panels = document.querySelectorAll(".panel");
let previews = document.querySelectorAll(".panel-preview");

if (indicator !== null) {
    indicator.style.width = tabs[0].getBoundingClientRect().width + "px";
    indicator.style.left = tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + "px";
}

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        let tabTarget = tab.getAttribute("aria-controls");

        indicator.style.width = tab.getBoundingClientRect().width + "px";
        indicator.style.left = tab.getBoundingClientRect().left - tab.parentElement.getBoundingClientRect().left + "px";

        panels.forEach((panel) => {
            let panelId = panel.getAttribute("id");
            if (tabTarget === panelId) {
                panel.classList.remove("invisible", "opacity-0", "scale-90");
                panel.classList.add("visible", "opacity-100", "scale-100");
            } else {
                panel.classList.add("invisible", "opacity-0", "scale-90");
                panel.classList.remove("visible", "opacity-100", "scale-100");
            }

            previews.forEach((preview) => {
                let prevTarget = preview.getAttribute("data-target");

                if (tabTarget === prevTarget) {
                    preview.classList.replace("translate-y-[100%]", "translate-y-0");
                    preview.classList.replace("scale-75", "scale-100");
                    preview.classList.replace("opacity-50", "opacity-100");
                    preview.classList.replace("z-0", "z-10");
                } else {
                    preview.classList.replace("scale-100", "scale-75");
                    preview.classList.replace("opacity-100", "opacity-50");
                    preview.classList.replace("z-10", "z-0");

                    setTimeout(() => {
                        preview.classList.replace("translate-y-0", "translate-y-[100%]");
                    }, 300);
                    clearTimeout();
                }
            });
        });
    });
});
`}
            </Script>
            <section id="solutions" className="pt-32">
                <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">O que
                            oferecemos</h2>
                        <p className="mx-auto mt-6 text-gray-700 dark:text-gray-300 md:w-3/4 lg:w-3/5">Pesquisar
                            psicologos qualificados, agendar sessões de terapia, conectar-se com profissionais
                            compatíveis e acompanhar o progresso no caminho para o bem-estar.</p>

                        <div role="tablist" aria-label="tabs"
                             className="relative mx-auto mt-12 grid h-12 w-auto grid-cols-3 items-center gap-x-1 overflow-hidden rounded-full border border-gray-200 bg-gray-100 px-[3px] text-gray-600 dark:border-gray-700 dark:border-opacity-60 dark:bg-darker dark:text-gray-300 dark:shadow-none sm:w-max">
                            <div
                                className={`tab-indicator absolute h-10 rounded-full bg-white shadow-md transition-[left] duration-500 dark:bg-gray-800`}></div>
                            <button role="tab" aria-selected="true" aria-controls="panel-0" tabIndex={0}
                                    title="tab item"
                                    className="tab relative block rounded-full py-2.5 px-4 hover:text-primary dark:hover:text-primaryLight">
                                <span className="m-auto block w-max text-sm font-medium tracking-wider">Explorar</span>
                            </button>
                            <button role="tab" aria-selected="false" aria-controls="panel-1" tabIndex={-1}
                                    title="tab item"
                                    className="tab relative block rounded-full py-2.5 px-4 hover:text-primary dark:hover:text-primaryLight">
                                <span
                                    className="m-auto block w-max text-sm font-medium tracking-wider">Agendar</span>
                            </button>
                            <button role="tab" aria-selected="false" aria-controls="panel-2" tabIndex={-1}
                                    title="tab item"
                                    className="tab relative block rounded-full py-2.5 px-4 hover:text-primary dark:hover:text-primaryLight">
                                <span className="m-auto block w-max text-sm font-medium tracking-wider">Bem-Estar</span>
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
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">Explore
                                            profissionais de saúde</h3>
                                        <p className="mt-8 text-gray-600 dark:text-gray-300">Explore profissionais de
                                            saúde qualificados, adaptados às suas necessidades e preferências
                                            exclusivas. Filtre a sua procura por especialidade e estilo de terapia para
                                            encontrar a combinação perfeita.</p>
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
                                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Filtrar</h4>
                                                    <p className="mt-1 text-gray-600 dark:text-gray-400">Adapte a sua
                                                        procura por especialidade, estilo de terapia e
                                                        disponibilidade</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="panel invisible absolute inset-0 flex scale-90 flex-col justify-center opacity-0 transition duration-500"
                                    id="panel-1">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">Agende
                                            Sessões</h3>
                                        <p className="mt-8 text-gray-600 dark:text-gray-300">Marque consultas com seu
                                            profissional de saúde escolhido.</p>
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
                                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Agende
                                                        Consultas</h4>
                                                    <p className="mt-1 text-gray-600 dark:text-gray-400">Facilmente
                                                        agenda consultas com o seu profissional de saúde.</p>
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
                                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Controle
                                                        as suas consultas</h4>
                                                    <p className="mt-1 text-gray-600 dark:text-gray-400">Connosco
                                                        consegue controlar quando tem as suas consultas e facilmente
                                                        remarcar, caso haja um inconveniente.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="panel invisible absolute inset-0 flex scale-90 flex-col justify-center opacity-0 transition duration-500"
                                    id="panel-2">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">Inicie
                                            a sua Jornada</h3>
                                        <p className="mt-8 text-gray-600 dark:text-gray-300">Participe em sessões de
                                            terapia significativas e transformadoras por meio de chamadas de vídeo,
                                            pessoalmente, ou áudio seguras. Acompanhe o seu progresso e o seu caminho
                                            para o bem-estar.</p>
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
                                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Sessões</h4>
                                                    <p className="mt-1 text-gray-600 dark:text-gray-400">Participe em
                                                        sessões de vídeo, pessoalmente, ou de voz.</p>
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
                                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Acompanhe
                                                        o seu progresso</h4>
                                                    <p className="mt-1 text-gray-600 dark:text-gray-400">Acompanhe o seu
                                                        progresso para atingir o bem-estar.</p>
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
                                            <Image src="/images/therapists/sittingonline.jpg"
                                                   className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]"
                                                   alt="tailus screenshot" loading="lazy" width="850" height="1926"/>
                                        </div>
                                        <div data-target="panel-1"
                                             className="panel-preview absolute inset-0 z-0 flex translate-y-[100%] scale-100 items-end overflow-hidden px-6 opacity-50 transition duration-500 sm:px-10">
                                            <Image src="/images/therapists/online.png"
                                                   className="mx-auto h-80 w-96 rounded-t-3xl border object-cover object-top shadow-2xl dark:border-transparent sm:h-[28rem]"
                                                   alt="tailus screenshot dark-mode" loading="lazy" width="850"
                                                   height="1780"/>
                                        </div>
                                        <div data-target="panel-2"
                                             className="panel-preview absolute inset-0 z-0 flex translate-y-[100%] scale-100 items-end overflow-hidden px-6 opacity-50 transition duration-500 sm:px-10">
                                            <Image src="/images/therapists/sittingtogether.png"
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
        </>
    )
}