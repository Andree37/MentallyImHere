import PsiForm from "@/components/PsiForm";

export default function Page() {
    return (
        <section className="py-32 sm:pt-40 md:pt-48 lg:pt-56">
            <div className="mx-auto px-4 sm:px-12 xl:max-w-5xl xl:px-0">
                <div className="relative z-10 text-center md:mx-auto md:w-5/6 lg:w-4/6">
                    <h1 className="relative text-center text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">Encontre
                        o seu próximo <span className="opacity-80">cliente.</span></h1>
                    <p className="mt-6 text-gray-700 dark:text-gray-300">Nós ajudamo-lo a encontrar o próximo
                        cliente.</p>
                </div>
                <div className="mt-12 grid gap-12 sm:mx-auto sm:max-w-lg lg:max-w-max">
                    <PsiForm/>
                </div>
            </div>
        </section>
    );
}
