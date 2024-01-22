'use client';
import { Form, useFieldAnswer } from '@quillforms/renderer-core';
import '@quillforms/renderer-core/build-style/style.css';
// @ts-ignore
import { registerCoreBlocks } from '@quillforms/react-renderer-utils';
import { InsertOneResult, ObjectId } from 'mongodb';
import mixpanel from 'mixpanel-browser';
import { v4 as uuidv4 } from 'uuid';
import { useSearchParams } from 'next/navigation';
const portugalCities = [
    { key: 'lisboa', value: 'Lisboa' },
    { key: 'porto', value: 'Porto' },
    { key: 'aves', value: 'Aves' },
    { key: 'sintra', value: 'Sintra' },
    { key: 'vila-nova-de-gaia', value: 'Vila Nova de Gaia' },
    { key: 'cascais', value: 'Cascais' },
    { key: 'loures', value: 'Loures' },
    { key: 'braga', value: 'Braga' },
    { key: 'almada', value: 'Almada' },
    { key: 'matosinhos', value: 'Matosinhos' },
    { key: 'amadora', value: 'Amadora' },
    { key: 'oeiras', value: 'Oeiras' },
    { key: 'gondomar', value: 'Gondomar' },
    { key: 'seixal', value: 'Seixal' },
    { key: 'guimaraes', value: 'Guimarães' },
    { key: 'odivelas', value: 'Odivelas' },
    { key: 'coimbra', value: 'Coimbra' },
    { key: 'vila-franca-de-xira', value: 'Vila Franca de Xira' },
    { key: 'maia', value: 'Maia' },
    { key: 'famalicao', value: 'Famalicão' },
    { key: 'leiria', value: 'Leiria' },
    { key: 'setubal', value: 'Setúbal' },
    { key: 'barcelos', value: 'Barcelos' },
    { key: 'funchal', value: 'Funchal' },
    { key: 'viseu', value: 'Viseu' },
    { key: 'viana-do-castelo', value: 'Viana do Castelo' },
    { key: 'barreiro', value: 'Barreiro' },
    { key: 'aveiro', value: 'Aveiro' },
    { key: 'queluz', value: 'Queluz' },
    { key: 'ponta-delgada', value: 'Ponta Delgada' },
    { key: 'faro', value: 'Faro' },
    { key: 'santarem', value: 'Santarém' },
    { key: 'evora', value: 'Évora' },
    { key: 'castelo-branco', value: 'Castelo Branco' },
    { key: 'vila-real', value: 'Vila Real' },
    { key: 'rio-tinto', value: 'Rio Tinto' },
    { key: 'amora', value: 'Amora' },
    { key: 'corroios', value: 'Corroios' },
    { key: 'guarda', value: 'Guarda' },
    { key: 'mafamude', value: 'Mafamude' },
    { key: 'ermezinde', value: 'Ermezinde' },
    { key: 'beja', value: 'Beja' },
    { key: 'agualva', value: 'Agualva' },
    { key: 'braganca', value: 'Bragança' },
    { key: 'espinho', value: 'Espinho' },
    { key: 'povoa-de-santa-iria', value: 'Póvoa de Santa Iria' },
    { key: 'senhora-da-hora', value: 'Senhora da Hora' },
    { key: 'massama', value: 'Massamá' },
    { key: 'aguas-santas', value: 'Águas Santas' },
    { key: 'estoril', value: 'Estoril' },
    { key: 'portalegre', value: 'Portalegre' },
    { key: 'sao-joao-da-madeira', value: 'São João da Madeira' },
    { key: 'entroncamento', value: 'Entroncamento' },
    { key: 'feira', value: 'Feira' },
    { key: 'acores', value: 'Açores' },
    { key: 'madeira', value: 'Madeira' },
];

const municipes = {
    aveiro: [
        'Águeda',
        'Albergaria-a-velha',
        'Anadia',
        'Arouca',
        'Aveiro',
        'Castelo de Paiva',
        'Espinho',
        'Estarreja',
        'Ílhavo',
        'Mealhada',
        'Murtosa',
        'Oliveira de Azeméis',
        'Oliveira do Bairro',
        'Ovar',
        'Santa Maria da Feira',
        'São João da Madeira',
        'Sever do Vouga',
        'Vagos',
        'Vale de Cambra',
    ],
    beja: [
        'Aljustrel',
        'Almodôvar',
        'Alvito',
        'Barrancos',
        'Beja',
        'Castro Verde',
        'Cuba',
        'Ferreira do Alentejo',
        'Mértola',
        'Moura',
        'Odemira',
        'Ourique',
        'Serpa',
        'Vidigueira',
    ],
    braga: [
        'Amares',
        'Barcelos',
        'Braga',
        'Cabeceiras de Basto',
        'Celorico de Basto',
        'Esposende',
        'Fafe',
        'Guimarães',
        'Póvoa de Lanhoso',
        'Terras de Bouro',
        'Vieira do Minho',
        'Vila Nova de Famalicão',
        'Vila Verde',
        'Vizela',
    ],
    braganca: [
        'Alfândega da Fé',
        'Bragança',
        'Carrazeda de Ansiães',
        'Freixo de Espada à Cinta',
        'Macedo de Cavaleiros',
        'Miranda do Douro',
        'Mirandela',
        'Mogadouro',
        'Torre de Moncorvo',
        'Vila Flor',
        'Vimioso',
        'Vinhais',
    ],
    'castelo-branco': [
        'Belmonte',
        'Castelo Branco',
        'Covilhã',
        'Fundão',
        'Idanha-a-nova',
        'Oleiros',
        'Penamacor',
        'Proença-a-nova',
        'Sertã',
        'Vila de Rei',
        'Vila Velha de Ródão',
    ],
    coimbra: [
        'Arganil',
        'Cantanhede',
        'Coimbra',
        'Condeixa-a-Nova',
        'Figueira da Foz',
        'Góis',
        'Lousã',
        'Mira',
        'Miranda do Corvo',
        'Montemor-o-Velho',
        'Oliveira do Hospital',
        'Pampilhosa da Serra',
        'Penacova',
        'Penela',
        'Soure',
        'Tábua',
        'Vila Nova de Poiares',
    ],
    faro: [
        'Albufeira',
        'Alcoutim',
        'Aljezur',
        'Castro Marim',
        'Faro',
        'Lagoa',
        'Lagos',
        'Loulé',
        'Monchique',
        'Olhão',
        'Portimão',
        'São Brás de Alportel',
        'Silves',
        'Tavira',
        'Vila do Bispo',
        'Vila Real de Santo António',
    ],
    guarda: [
        'Aguiar da Beira',
        'Almeida',
        'Celorico da Beira',
        'Figueira de Castelo Rodrigo',
        'Fornos de Algodres',
        'Gouveia',
        'Guarda',
        'Manteigas',
        'Mêda',
        'Pinhel',
        'Sabugal',
        'Seia',
        'Trancoso',
        'Vila Nova de Foz Côa',
    ],
    leiria: [
        'Alcobaça',
        'Alvaiázere',
        'Ansião',
        'Batalha',
        'Bombarral',
        'Caldas da Rainha',
        'Castanheira de Pêra',
        'Figueiró Dos Vinhos',
        'Leiria',
        'Marinha Grande',
        'Nazaré',
        'Óbidos',
        'Pedrógão Grande',
        'Peniche',
        'Pombal',
        'Porto de Mós',
    ],
    lisboa: [
        'Alenquer',
        'Amadora',
        'Arruda Dos Vinhos',
        'Azambuja',
        'Cadaval',
        'Cascais',
        'Lisboa',
        'Loures',
        'Lourinhã',
        'Mafra',
        'Odivelas',
        'Oeiras',
        'Sintra',
        'Sobral de Monte Agraço',
        'Torres Vedras',
        'Vila Franca de Xira',
    ],
    portalegre: [
        'Alter do Chão',
        'Arronches',
        'Avis',
        'Campo Maior',
        'Castelo de Vide',
        'Crato',
        'Elvas',
        'Fronteira',
        'Gavião',
        'Marvão',
        'Monforte',
        'Nisa',
        'Ponte de Sor',
        'Portalegre',
        'Sousel',
    ],
    porto: [
        'Amarante',
        'Baião',
        'Felgueiras',
        'Gondomar',
        'Lousada',
        'Maia',
        'Marco de Canaveses',
        'Matosinhos',
        'Paços de Ferreira',
        'Paredes',
        'Penafiel',
        'Porto',
        'Póvoa de Varzim',
        'Santo Tirso',
        'Trofa',
        'Valongo',
        'Vila do Conde',
        'Vila Nova de Gaia',
    ],
    acores: [
        'Angra do Heroísmo',
        'Calheta de São Jorge',
        'Corvo',
        'Horta',
        'Lagoa (Açores)',
        'Lajes Das Flores',
        'Lajes do Pico',
        'Madalena',
        'Nordeste',
        'Ponta Delgada',
        'Povoação',
        'Praia da Vitória',
        'Ribeira Grande',
        'Santa Cruz da Graciosa',
        'Santa Cruz Das Flores',
        'São Roque do Pico',
        'Velas',
        'Vila do Porto',
        'Vila Franca do Campo',
    ],
    madeira: [
        'Calheta',
        'Câmara de Lobos',
        'Funchal',
        'Machico',
        'Ponta do Sol',
        'Porto Moniz',
        'Porto Santo',
        'Ribeira Brava',
        'Santa Cruz',
        'Santana',
        'São Vicente',
    ],
    santarem: [
        'Abrantes',
        'Alcanena',
        'Almeirim',
        'Alpiarça',
        'Benavente',
        'Cartaxo',
        'Chamusca',
        'Constância',
        'Coruche',
        'Entroncamento',
        'Ferreira do Zêzere',
        'Golegã',
        'Mação',
        'Ourém',
        'Rio Maior',
        'Salvaterra de Magos',
        'Santarém',
        'Sardoal',
        'Tomar',
        'Torres Novas',
        'Vila Nova da Barquinha',
    ],
    setubal: [
        'Alcácer do Sal',
        'Alcochete',
        'Almada',
        'Barreiro',
        'Grândola',
        'Moita',
        'Montijo',
        'Palmela',
        'Santiago do Cacém',
        'Seixal',
        'Sesimbra',
        'Setúbal',
        'Sines',
    ],
    'viana-do-castelo': [
        'Arcos de Valdevez',
        'Caminha',
        'Melgaço',
        'Monção',
        'Paredes de Coura',
        'Ponte da Barca',
        'Ponte de Lima',
        'Valença',
        'Viana do Castelo',
        'Vila Nova de Cerveira',
    ],
    'vila-real': [
        'Alijó',
        'Boticas',
        'Chaves',
        'Mesão Frio',
        'Mondim de Basto',
        'Montalegre',
        'Murça',
        'Peso da Régua',
        'Ribeira de Pena',
        'Sabrosa',
        'Santa Marta de Penaguião',
        'Valpaços',
        'Vila Pouca de Aguiar',
        'Vila Real',
    ],
    viseu: [
        'Alijó',
        'Boticas',
        'Chaves',
        'Mesão Frio',
        'Mondim de Basto',
        'Montalegre',
        'Murça',
        'Peso da Régua',
        'Ribeira de Pena',
        'Sabrosa',
        'Santa Marta de Penaguião',
        'Valpaços',
        'Vila Pouca de Aguiar',
        'Vila Real',
    ],
    evora: [
        'Alandroal',
        'Arraiolos',
        'Borba',
        'Estremoz',
        'Évora',
        'Montemor-o-Novo',
        'Mora',
        'Mourão',
        'Portel',
        'Redondo',
        'Reguengos de Monsaraz',
        'Vendas Novas',
        'Viana do Alentejo',
        'Vila Viçosa',
    ],
};

type Answers = {
    [key: string]: {
        value: string | string[] | undefined;
    };
};

type ClienteResponseData = {
    answers: Answers;
};

registerCoreBlocks();

async function postAnswersOnTrello(data: Answers & { advertiserID: string }, id: ObjectId | undefined) {
    const response = await fetch(`/api/trello/cards/clients/quill`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data, id }),
    });

    if (!response.ok) {
        return;
    }

    return await response.json();
}

async function getPsis(psiGender: string, consultationType: string) {
    const response = await fetch(
        `/api/psychologist?psigender=${psiGender}&consultationPreference=${consultationType}`,
        {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        },
    );

    if (!response.ok) {
        return;
    }

    return await response.json();
}

async function addPsysSuggestions(cardID: string, psysSuggestion: string) {
    const response = await fetch(`/api/trello/cards/clients/psychologists`, {
        method: 'POSt',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cardID, psysSuggestion }),
    });

    if (!response.ok) {
        return;
    }

    return await response.json();
}

async function postAnswersOnMongo(data: Answers & { advertiserID: string }): Promise<
    | {
          document: InsertOneResult;
      }
    | undefined
> {
    const response = await fetch(`/api/client/quill`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data }),
    });

    if (!response.ok) {
        return;
    }

    return await response.json();
}

async function getAdvertiser(id: string | null) {
    const response = await fetch(`/api/advertisers?id=${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
        return;
    }

    return await response.json();
}

mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN!!, {
    track_pageview: true,
    persistence: 'localStorage',
});

mixpanel.identify(uuidv4());

export default function RegisterClientForm() {
    const genderAnswer = useFieldAnswer('0-3-gender') as string;
    const consultationForAnswer = useFieldAnswer('0-8-consultation-for') as string;
    const prevExperienceAnswer = useFieldAnswer('1-0-previous-experience-therapy') as string;
    const frequencyAnswer = useFieldAnswer('0-6-frequency') as string;
    const immediateAvailabilityAnswer = useFieldAnswer('1-1-immediate-availability') as string;
    const contactPreferenceAnswer = useFieldAnswer('1-6-contact-preference') as string;
    const locationAnswer = useFieldAnswer('1-3-location') as string;

    const params = useSearchParams();

    return (
        <div className="h-[80vh] w-full">
            <Form
                formId={1}
                beforeGoingNext={({ currentBlockId, goNext }) => {
                    mixpanel.track('Answer on Form', {
                        Step: currentBlockId,
                    });
                    goNext();
                }}
                formObj={{
                    blocks: [
                        {
                            name: 'welcome-screen',
                            id: '0-welcome',
                            attributes: {
                                label: 'Bem vind@!',
                                description: 'Este questionário ajuda-nos a conhecer-te um pouco melhor.',
                                buttonText: 'Começar',
                                attachment: {
                                    type: 'image',
                                    url: '/images/therapists/sittingonline.jpg',
                                },
                            },
                        },
                        {
                            id: '0-1-welcome-statement',
                            name: 'statement',
                            attributes: {
                                label: 'Este questionário ajuda-nos a encontrar o profissional mais adequado para ti.',
                                description: '(2 minutos)',
                                buttonText: 'Continuar',
                                quotationMarks: false,
                            },
                        },
                        {
                            name: 'short-text',
                            id: '0-2-name',
                            attributes: {
                                required: true,
                                label: 'Indique o seu <strong>nome e apelido</strong>',
                            },
                        },
                        {
                            name: 'multiple-choice',
                            id: '0-3-gender',
                            attributes: {
                                required: true,
                                multiple: false,
                                verticalAlign: true,
                                label: 'Qual é o seu <strong>género</strong>?',
                                choices: [
                                    {
                                        label: 'Masculino',
                                        value: 'masculino',
                                    },
                                    {
                                        label: 'Feminino',
                                        value: 'feminino',
                                    },
                                    {
                                        label: 'Não-binário',
                                        value: 'non-binary',
                                    },
                                    {
                                        label: 'Prefiro não dizer',
                                        value: 'prefer-not-to-tell',
                                    },
                                    {
                                        label: 'Prefiro auto-descrever-me',
                                        value: 'prefer-auto-describe',
                                    },
                                ],
                            },
                        },
                        ...(genderAnswer?.includes('prefer-auto-describe')
                            ? [
                                  {
                                      name: 'short-text',
                                      id: '0-3-1-auto-describe-gender',
                                      attributes: {
                                          classnames: 'first-block',
                                          required: true,
                                          label: 'Qual é o seu género?',
                                      },
                                  },
                              ]
                            : []),
                        {
                            id: '0-4-age',
                            name: 'number',
                            attributes: {
                                label: 'Indique a sua <strong>idade</strong>',
                                required: true,
                                setMin: true,
                                min: 18,
                            },
                        },
                        {
                            id: '0-5-after-statement',
                            name: 'statement',
                            attributes: {
                                label:
                                    'Neste momento, os valores das consultas com os profissionais de saúde mental disponíveis na plataforma estão compreendidos entre <strong>30€ e 60€</strong> por sessão.\n\n\n\n' +
                                    'Em média, <strong>os processos terapêuticos</strong> compreendem 1 sessão por semana ou 1 sessão de duas em duas semanas.\n\n\n\n' +
                                    'A <strong>PsiPlexus</strong> pede esta informação no sentido de agilizar o contacto com o profissional.',
                                description:
                                    'Carregue em <strong>Continuar</strong> para responder à periodicidade e valor por consulta.',
                                buttonText: 'Continuar',
                                quotationMarks: false,
                            },
                        },
                        {
                            name: 'multiple-choice',
                            id: '0-6-frequency',
                            attributes: {
                                required: true,
                                multiple: false,
                                verticalAlign: false,
                                label: 'Indique a <strong>periodicidade</strong> preferida em relação às sessões.',
                                choices: [
                                    {
                                        label: '1 vez por semana',
                                        value: 'once-a-week',
                                    },
                                    {
                                        label: 'Duas em duas semanas',
                                        value: 'two-in-two-weeks',
                                    },
                                    {
                                        label: 'Outro',
                                        value: 'other',
                                    },
                                ],
                            },
                        },
                        ...(frequencyAnswer?.includes('other')
                            ? [
                                  {
                                      name: 'short-text',
                                      id: '0-6-1-frequency-for-other',
                                      attributes: {
                                          classnames: 'first-block',
                                          required: true,
                                          label: 'Qual seria a sua frequência preferida?',
                                      },
                                  },
                              ]
                            : []),
                        {
                            id: '0-7-price',
                            name: 'slider',
                            attributes: {
                                label: 'Indique o <strong>valor máximo em euros</strong> que estaria disponível para pagar por cada sessão.',
                                min: 30,
                                step: 5,
                                max: 60,
                                suffix: '€',
                                defaultValue: '45',
                            },
                        },
                        {
                            name: 'multiple-choice',
                            id: '0-8-consultation-for',
                            attributes: {
                                required: true,
                                multiple: false,
                                verticalAlign: false,
                                label: 'Para quem é o <strong>pedido de consulta</strong> com profissional de saúde?',
                                choices: [
                                    {
                                        label: 'Para mim',
                                        value: 'self',
                                    },
                                    {
                                        label: 'Para casal',
                                        value: 'couple',
                                    },
                                    {
                                        label: 'Outro',
                                        value: 'other',
                                    },
                                ],
                            },
                        },
                        ...(consultationForAnswer?.includes('other')
                            ? [
                                  {
                                      name: 'short-text',
                                      id: '0-8-1-consultation-for-other',
                                      attributes: {
                                          classnames: 'first-block',
                                          required: true,
                                          label: 'Para quem seria a consulta?',
                                      },
                                  },
                              ]
                            : []),
                        {
                            name: 'short-text',
                            id: '0-9-motivation',
                            attributes: {
                                classnames: 'first-block',
                                required: true,
                                label: 'Indique o <strong>motivo</strong> do pedido de consulta',
                            },
                        },
                        {
                            name: 'multiple-choice',
                            id: '1-0-previous-experience-therapy',
                            attributes: {
                                required: true,
                                multiple: false,
                                verticalAlign: true,
                                label: 'Já teve <strong>acompanhamento</strong> em consultas de piscologia ou de psicoterapia?',
                                choices: [
                                    {
                                        label: 'Sim',
                                        value: 'yes',
                                    },
                                    {
                                        label: 'Não',
                                        value: 'no',
                                    },
                                ],
                            },
                        },
                        ...(prevExperienceAnswer?.includes('yes')
                            ? [
                                  {
                                      name: 'short-text',
                                      id: '1-0-1-prev-experience-yes',
                                      attributes: {
                                          classnames: 'first-block',
                                          required: true,
                                          label: 'Descreva brevemente como foi a sua experiência anterior.',
                                          description: 'Se entender não partilhar, escreva "Prefiro não responder".',
                                      },
                                  },
                              ]
                            : []),
                        {
                            name: 'multiple-choice',
                            id: '1-1-immediate-availability',
                            attributes: {
                                required: true,
                                multiple: false,
                                verticalAlign: true,
                                label: 'Indique-nos a sua <strong>disponibilidade para começar</strong> as suas consultas com o profissional de saúde mental.',
                                choices: [
                                    {
                                        label: 'Disponibilidade imediata',
                                        value: 'immediate',
                                    },
                                    {
                                        label: 'Outro',
                                        value: 'other',
                                    },
                                ],
                            },
                        },
                        ...(immediateAvailabilityAnswer?.includes('other')
                            ? [
                                  {
                                      name: 'short-text',
                                      id: '1-1-1-immediate-availability-other',
                                      attributes: {
                                          classnames: 'first-block',
                                          required: true,
                                          label: 'Quando poderia começar?',
                                      },
                                  },
                              ]
                            : []),
                        {
                            name: 'short-text',
                            id: '1-1-2-availability-describe',
                            attributes: {
                                classnames: 'first-block',
                                required: true,
                                label: 'Diga-nos os <strong>horários</strong> nos quais tem disponibilidade para ter as suas consultas. Utilize o <strong>formato como no exemplo abaixo</strong>:',
                                description: '2ª feira - 17h-20h\n\n3ª feira - 14h-15h e 16h-17h\n\n...',
                            },
                        },
                        {
                            name: 'multiple-choice',
                            id: '1-2-preferential-consultation-type',
                            attributes: {
                                required: true,
                                multiple: false,
                                verticalAlign: true,
                                label: 'Qual é o seu <strong>modo preferencial</strong> para as consultas?',
                                choices: [
                                    {
                                        label: 'Online',
                                        value: 'online',
                                    },
                                    {
                                        label: 'Presencial',
                                        value: 'presential',
                                    },
                                    {
                                        label: 'Misto',
                                        value: 'mixed',
                                    },
                                    {
                                        label: 'Sem preferência',
                                        value: 'no-preference',
                                    },
                                ],
                            },
                        },
                        {
                            id: '1-3-location',
                            name: 'dropdown',
                            attributes: {
                                label: 'Indique o <strong>distrito</strong> da sua <strong>localização preferencial</strong> para a realização das consultas?',
                                required: true,
                                choices: portugalCities.map((p) => {
                                    return { value: p.key, label: p.value };
                                }),
                            },
                        },
                        ...(Object.keys(municipes).includes(locationAnswer)
                            ? [
                                  {
                                      id: '1-3-1-location-municipe',
                                      name: 'dropdown',
                                      attributes: {
                                          label: 'Indique o <strong>município</strong> da sua <strong>localização preferencial</strong> para a realização das consultas?',
                                          required: true,
                                          choices: (municipes as Record<string, string[]>)[locationAnswer].map((p) => ({
                                              value: p,
                                              label: p,
                                          })),
                                      },
                                  },
                              ]
                            : []),
                        {
                            name: 'multiple-choice',
                            id: '1-4-professional-gender',
                            attributes: {
                                required: true,
                                multiple: false,
                                verticalAlign: false,
                                label: 'Tem alguma preferência em relação ao <strong>género</strong> do profissional de saúde mental?',
                                choices: [
                                    {
                                        label: 'Masculino',
                                        value: 'male',
                                    },
                                    {
                                        label: 'Feminino',
                                        value: 'female',
                                    },
                                    {
                                        label: 'Sem preferência',
                                        value: 'no-preference',
                                    },
                                ],
                            },
                        },
                        {
                            id: '1-5-email',
                            name: 'email',
                            attributes: {
                                label: 'Indique o seu <strong>email</strong>.',
                            },
                        },
                        {
                            name: 'multiple-choice',
                            id: '1-6-contact-preference',
                            attributes: {
                                required: true,
                                multiple: false,
                                verticalAlign: false,
                                label: 'Como deseja ser contactado?',
                                choices: [
                                    {
                                        label: 'Chamada',
                                        value: 'call',
                                    },
                                    {
                                        label: 'WhatsApp',
                                        value: 'whatsapp',
                                    },
                                ],
                            },
                        },
                        ...(contactPreferenceAnswer?.includes('call') || contactPreferenceAnswer?.includes('whatsapp')
                            ? [
                                  {
                                      name: 'number',
                                      id: '1-6-1-contact-preference-phone',
                                      attributes: {
                                          classnames: 'first-block',
                                          required: true,
                                          label: 'Por favor indique o seu numero de telefone para ser contactado.',
                                      },
                                  },
                              ]
                            : []),
                        {
                            name: 'short-text',
                            id: '1-7-additional-information',
                            attributes: {
                                classnames: 'first-block',
                                required: false,
                                label: 'Caso tenha outra preferência, consideração ou informação que gostasse de partilhar, faça-o aqui.',
                                description: 'Deixe em branco se não tiver',
                            },
                        },
                    ],
                    settings: {
                        animationDirection: 'horizontal',
                        disableWheelSwiping: false,
                        disableNavigationArrows: false,
                        disableProgressBar: true,
                        showLettersOnAnswers: false,
                    },
                    messages: {
                        'label.hintText.enter': 'Enter ↵',
                        'label.errorAlert.required': 'Este campo é obrigatório',
                        'block.shortText.placeholder': 'Escreva aqui a sua resposta',
                        'block.number.placeholder': 'Escreva aqui a sua resposta',
                        'label.errorAlert.minNum': 'Por favor, introduza um número maior do que {{attribute:min}}',
                        'label.hintText.key': 'Letra',
                        'block.defaultThankYouScreen.label':
                            'Obrigado pela resposta.\n\nEm breve, irá receber pelo seu método de contacto preferencial as informações dos próximos passos.',
                        'label.submitBtn': 'Submeter',
                        'block.dropdown.placeholder': 'Começa a escrever e selecione a sua resposta',
                        'label.errorAlert.email': 'Email inválido',
                        'label.errorAlert.number': 'Apenas números',
                    },
                    theme: {
                        buttonsBgColor: '#1664C0',
                        answersColor: 'black',
                        questionsLabelFontSize: { lg: '20px', sm: '15px' },
                        buttonsFontSize: { lg: '22px', sm: '13px' },
                        textInputAnswers: { lg: '30px', sm: '17px' },
                        fontSize: { lg: '20px', sm: '12px' },
                    },
                }}
                onSubmit={async (data, { completeForm, setIsSubmitting }) => {
                    const tclienteResponseDataData = data as ClienteResponseData;
                    // ensure we remove the previously set fields
                    if (tclienteResponseDataData.answers['0-3-gender'].value?.[0] !== 'prefer-auto-describe') {
                        delete tclienteResponseDataData.answers['0-3-1-auto-describe-gender'];
                    }

                    if (tclienteResponseDataData.answers['0-8-consultation-for'].value?.[0] !== 'other') {
                        delete tclienteResponseDataData.answers['0-8-1-consultation-for-other'];
                    }

                    if (tclienteResponseDataData.answers['1-0-previous-experience-therapy'].value?.[0] !== 'yes') {
                        delete tclienteResponseDataData.answers['1-0-1-prev-experience-yes'];
                    }

                    if (tclienteResponseDataData.answers['1-1-immediate-availability'].value?.[0] !== 'other') {
                        delete tclienteResponseDataData.answers['1-1-1-immediate-availability-other'];
                    }

                    if (tclienteResponseDataData.answers['0-6-frequency'].value?.[0] !== 'other') {
                        delete tclienteResponseDataData.answers['0-6.1-frequency-for-other'];
                    }

                    if (
                        tclienteResponseDataData.answers['1-6-contact-preference'].value?.[0] !== 'call' &&
                        tclienteResponseDataData.answers['1-6-contact-preference'].value?.[0] !== 'whatsapp'
                    ) {
                        delete tclienteResponseDataData.answers['1-6-1-contact-preference-phone'];
                    }

                    const answers = [];
                    for (const key in tclienteResponseDataData.answers) {
                        answers.push({ [key]: tclienteResponseDataData.answers[key].value });
                    }

                    const answerData: { [k: string]: any } = {};
                    answers.map((d: { [k: string]: any }) => {
                        const key = Object.keys(d)[0];
                        const formattedKeys = Object.keys(d)[0].split('-');
                        const filteredKeys = formattedKeys.filter((k) => !/^\d+$/.test(k));
                        const formattedKey = filteredKeys.join('-');
                        answerData[formattedKey] = d[key];
                    });

                    // fetch advertiser information
                    const advertiserID = params.get('adv');
                    const adv = advertiserID ? await getAdvertiser(advertiserID) : null;

                    const advertiserObj = adv ? { advertiserID: adv?.data?._id } : { advertiserID: 'Unknown' };

                    const mongoRes = await postAnswersOnMongo({ ...answerData, ...advertiserObj });
                    const trelloRes = await postAnswersOnTrello(
                        { ...answerData, ...advertiserObj },
                        mongoRes?.document.insertedId,
                    );

                    const psychologists = await getPsis(
                        answerData['professional-gender'][0],
                        answerData['preferential-consultation-type'][0],
                    );

                    const addPsys = psychologists.data.map((p: Object) => {
                        addPsysSuggestions(trelloRes?.data?.id, JSON.stringify(p, null, 2));
                    });

                    await Promise.all(addPsys);

                    // show completed form after submit on trello and mongo
                    setIsSubmitting(false);
                    completeForm();
                }}
                applyLogic={false}
            />
        </div>
    );
}
