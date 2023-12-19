import Image from 'next/image';

const stats = [
    { label: 'Clientes atraídos', value: '12' },
    { label: 'Clientes ainda à espera da primeira consulta', value: '3' },
    { label: 'Rendimento Gerado', value: '2 euros' },
    { label: 'Data Limite (renova automaticamente)', value: '30/03/2023' },
];

const values = [
    {
        name: 'Recompensa por Cliente',
        description:
            'Nível 1 (1-19 clientes): 10€ por cada cliente indicado.\n' +
            'Nível 2 (20-29 clientes): 15€ por cada cliente indicado.\n' +
            'Nível 3 (30+ clientes): 20€ por cada cliente indicado.\n',
    },
    {
        name: 'Detalhes do Programa',
        description:
            'Duração: 90 dias (3 meses)\n' +
            'Período de Qualificação: Data de início até data de fim (por exemplo, de 1 de janeiro de 2023 a 30 de Março de 2023)\n' +
            'Público-Alvo: Influencers/Companies\n' +
            'Cálculo da Recompensa: Número total de clientes qualificados indicados pelo anunciante multiplicado pelo valor da recompensa correspondente ao nível alcançado.\n',
    },
    {
        name: 'Renovação do Programa',
        description:
            'O programa é renovado automaticamente a cada 3 meses. Qualquer alteração do mesmo todos os intervenientes serão avisados via e-mail das alterações.',
    },
    {
        name: 'Desistir do Programa',
        description:
            'Para desistir do programa o anunciante não terá de tomar qualquer medida adicional, se não existirem mais users a chegar por parte desse anunciante, o anunciante não irá receber a recompensa\n' +
            'Se quiser que apaguemos os seus dados da nossa base de dados, basta enviar-nos um email a partir do qual se inscreveu dizendo: “Quero desistir do programa para anunciantes e quero apagar os meus dados pessoais” e a psiplexus tratará disso o mais breve possível.',
    },
    {
        name: 'Pagamento e Reconhecimento',
        description:
            'O pagamento é efetuado mensalmente para o anunciante. Este é feito segundo os dados que são demonstrados para o mesmo nesta página',
    },
];

export default function Page() {
    return (
        <main className="isolate">
            {/* Hero section */}
            <div className="relative isolate -z-10">
                <svg
                    className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M.5 200V.5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect
                        width="100%"
                        height="100%"
                        strokeWidth={0}
                        fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
                    />
                </svg>
                <div
                    className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                        style={{
                            clipPath:
                                'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
                        }}
                    />
                </div>
                <div className="overflow-hidden">
                    <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                            <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                    Obrigado por nos ajudar!
                                </h1>
                                <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                                    Estamos, <strong>em conjunto</strong>, a mudar como as pessoas e psicólogos se
                                    conectam. De maneira a que seja o mais ajustado às necessidades de cada um.
                                </p>
                                <p className="relative mt-3 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                                    Com a sua ajuda podemos chegar a mais pessas que precisem deste produto!
                                </p>

                                <p className="relative mt-9 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                                    O seu hyperlink com o código de campanha: (link)
                                </p>
                            </div>
                            <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                                    <div className="relative">
                                        <Image
                                            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                                            alt=""
                                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            width={528}
                                            height={80}
                                        />
                                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                </div>
                                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                    <div className="relative">
                                        <Image
                                            src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                                            alt=""
                                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            width={528}
                                            height={80}
                                        />
                                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                    <div className="relative">
                                        <Image
                                            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                                            alt=""
                                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            width={528}
                                            height={80}
                                        />
                                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                </div>
                                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                                    <div className="relative">
                                        <Image
                                            src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                                            alt=""
                                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            width={528}
                                            height={80}
                                        />
                                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                    <div className="relative">
                                        <Image
                                            src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                                            alt=""
                                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            width={528}
                                            height={80}
                                        />
                                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content section */}
            <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A sua contribuição</h2>
                    <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                        <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                            <p className="text-xl leading-8 text-gray-600">
                                Esta estatística mostra o total de novos clientes que foram atraídos para a PsiPlexus
                                graças à vossa campanha.
                            </p>
                            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                                <p>
                                    Aqui pode ver o total de receita gerada pela vossa campanha. Este valor reflete o
                                    sucesso da vossa campanha em termos monetários e a sua contribuição para o
                                    crescimento da nossa plataforma.
                                </p>
                                <p className="mt-10">
                                    Esta secção indica o tempo restante até ao final da vossa campanha. É uma
                                    oportunidade para ajustar e otimizar a vossa estratégia para maximizar o impacto e
                                    os resultados finais.
                                </p>
                            </div>
                        </div>
                        <div className="lg:flex lg:flex-auto lg:justify-center">
                            <dl className="w-64 space-y-8 xl:w-80">
                                {stats.map((stat) => (
                                    <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                                        <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
                                        <dd className="text-5xl font-semibold tracking-tight underline text-primary">
                                            {stat.value}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image section */}
            <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
                <Image
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                    alt=""
                    className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
                    width={2832}
                    height={2832}
                />
            </div>

            {/* Values section */}
            <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our values</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate
                        veritatis in accusamus quisquam.
                    </p>
                </div>
                <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {values.map((value) => (
                        <div key={value.name}>
                            <dt className="font-semibold text-gray-900">{value.name}</dt>
                            <dd className="mt-1 text-gray-600">{value.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </main>
    );
}
