'use client';
import { Form, useFieldAnswer } from '@quillforms/renderer-core';
import '@quillforms/renderer-core/build-style/style.css';
// @ts-ignore
import { registerCoreBlocks } from '@quillforms/react-renderer-utils';
import { InsertOneResult, ObjectId } from 'mongodb';
import mixpanel from 'mixpanel-browser';
import { v4 as uuidv4 } from 'uuid';

const portugalCities = [
    'Lisboa',
    'Porto',
    'Aves',
    'Sintra',
    'Vila Nova de Gaia',
    'Cascais',
    'Loures',
    'Braga',
    'Almada',
    'Matosinhos',
    'Amadora',
    'Oeiras',
    'Gondomar',
    'Seixal',
    'Guimarães',
    'Odivelas',
    'Coimbra',
    'Vila Franca de Xira',
    'Maia',
    'Famalicão',
    'Leiria',
    'Setúbal',
    'Barcelos',
    'Funchal',
    'Viseu',
    'Viana do Castelo',
    'Barreiro',
    'Aveiro',
    'Queluz',
    'Ponta Delgada',
    'Faro',
    'Santarém',
    'Évora',
    'Castelo Branco',
    'Vila Real',
    'Rio Tinto',
    'Amora',
    'Corroios',
    'Guarda',
    'Mafamude',
    'Ermezinde',
    'Beja',
    'Agualva',
    'Bragança',
    'Espinho',
    'Póvoa de Santa Iria',
    'Senhora da Hora',
    'Massamá',
    'Águas Santas',
    'Estoril',
    'Portalegre',
    'São João da Madeira',
    'Entroncamento',
    'Feira',
];

type Answers = {
    [key: string]: {
        value: string | string[] | undefined;
    };
};

type ClienteResponseData = {
    answers: Answers;
};

registerCoreBlocks();

async function postAnswersOnTrello(data: Answers, id: ObjectId | undefined) {
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

async function postAnswersOnMongo(data: Answers): Promise<
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

    return (
        <div className="h-[70vh] w-full">
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
                                          label: 'Quando pode começar?',
                                      },
                                  },
                              ]
                            : [
                                  {
                                      name: 'multiple-choice',
                                      id: '1-1-2-availability-days',
                                      attributes: {
                                          required: true,
                                          multiple: true,
                                          verticalAlign: false,
                                          label: 'Dias da semana que prefere.',
                                          description:
                                              'Recomendamos que selecione <strong>vários dias</strong> para a disponibilidade com o profissional de saúde',
                                          choices: [
                                              {
                                                  label: '2ª Feira',
                                                  value: 'monday',
                                              },
                                              {
                                                  label: '3ª Feira',
                                                  value: 'tuesday',
                                              },
                                              {
                                                  label: '4ª Feira',
                                                  value: 'wednesday',
                                              },
                                              {
                                                  label: '5ª Feira',
                                                  value: 'thursday',
                                              },
                                              {
                                                  label: '6ª Feira',
                                                  value: 'friday',
                                              },
                                              {
                                                  label: 'Sábado',
                                                  value: 'saturday',
                                              },
                                              {
                                                  label: 'Domingo',
                                                  value: 'sunday',
                                              },
                                          ],
                                      },
                                  },
                                  {
                                      name: 'multiple-choice',
                                      id: '1-1-3-availability-hours',
                                      attributes: {
                                          required: true,
                                          multiple: true,
                                          verticalAlign: false,
                                          label: 'Períodos do dia que prefere.',
                                          description:
                                              'Recomendamos que selecione <strong>vários horários</strong> para a disponibilidade com o profissional de saúde',
                                          choices: [
                                              {
                                                  label: 'Manhã (8h-12h)',
                                                  value: 'morning',
                                              },
                                              {
                                                  label: 'Almoço (12h-14h)',
                                                  value: 'lunch',
                                              },
                                              {
                                                  label: 'Tarde (14h-18h)',
                                                  value: 'afternoon',
                                              },
                                              {
                                                  label: 'Noite (18h-22h)',
                                                  value: 'evening',
                                              },
                                          ],
                                      },
                                  },
                              ]),
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
                                label: 'Indique a <strong>localização preferencial</strong> para a realização das consultas?',
                                required: true,
                                choices: portugalCities.map((p) => ({ value: p, label: p })),
                            },
                        },
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
                                        label: 'Email',
                                        value: 'email',
                                    },
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

                    // I know I am doing some typescript magic, but let me live :(
                    const mongoRes = await postAnswersOnMongo(answerData);
                    const trelloRes = await postAnswersOnTrello(answerData, mongoRes?.document.insertedId);

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
