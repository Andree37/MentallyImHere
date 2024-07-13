'use client';
import { useEffect, useRef, useState } from 'react';
import { Form, useFieldAnswer } from '@quillforms/renderer-core';
import '@quillforms/renderer-core/build-style/style.css';
// @ts-ignore
import { municipes, portugalCities } from '@/lib/locations';
// @ts-ignore
import { registerCoreBlocks } from '@quillforms/react-renderer-utils';
import mixpanel from 'mixpanel-browser';
import { InsertOneResult, ObjectId } from 'mongodb';
import { useSearchParams } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

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

export default function RegisterClientForm({ source }: { source: string | string[] | undefined }) {
    const [goToForm, setGoToForm] = useState(true);
    const triageFormRef = useRef<HTMLDivElement>(null);
    const genderAnswer = useFieldAnswer('0-3-gender') as string;
    const consultationForAnswer = useFieldAnswer('0-8-consultation-for') as string;
    const prevExperienceAnswer = useFieldAnswer('1-0-previous-experience-therapy') as string;
    const frequencyAnswer = useFieldAnswer('0-6-frequency') as string;
    const immediateAvailabilityAnswer = useFieldAnswer('1-1-immediate-availability') as string;
    const contactPreferenceAnswer = useFieldAnswer('1-6-contact-preference') as string;
    const locationAnswer = useFieldAnswer('1-3-location') as string;
    const preferentialConsultationType = useFieldAnswer('1-2-preferential-consultation-type') as string;

    const params = useSearchParams();

    useEffect(() => {
        if (source) {
            setGoToForm(false);
        }
    }, []);

    if (!goToForm && source) {
        return (
            <div className="h-[80vh] w-full flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 p-6">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:w-max md:text-4xl xl:text-5xl text-center">
                    <span className="text-orange-400">Encontra</span> o Psicólogo mais adequado para si, em 3 minutos
                </h2>

                <button
                    className="bg-orange-400 text-white font-bold py-3 px-8 text-lg rounded-full hover:bg-orange-500 mt-6"
                    onClick={() => setGoToForm(true)}
                >
                    Começar
                </button>
            </div>
        );
    }

    return (
        <div className="h-[80vh] w-full" id={'triage-form'} ref={triageFormRef}>
            <Form
                ref={triageFormRef}
                formId={1}
                beforeGoingNext={({ currentBlockId, goNext, answers }) => {
                    const parsedAnswers = Object.entries(answers)
                        .filter(([key, value]) => {
                            // @ts-ignore
                            return (value.isAnswered && value.isValid) || key == '0-7-price'; // because price doesnt have the others
                        })
                        .map(([key, value]) => {
                            return {
                                // @ts-ignore
                                [key]: value?.value,
                            };
                        });

                    mixpanel.track('Answer on Form', {
                        Step: currentBlockId,
                        Answers: parsedAnswers,
                    });
                    goNext();
                }}
                formObj={{
                    blocks: [
                        //@ts-expect-error
                        ...(!Boolean(params.get('source'))
                            ? [
                                  {
                                      name: 'welcome-screen',
                                      id: '0-welcome',
                                      attributes: {
                                          label: 'Bem vind@!',
                                          description: 'Este questionário ajuda-nos a conhecê-lo(a) um pouco melhor.',
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
                                          label: 'Este questionário ajuda-nos a encontrar o profissional mais adequado para si.',
                                          description: '(2 minutos)',
                                          buttonText: 'Continuar',
                                          quotationMarks: false,
                                      },
                                  },
                              ]
                            : []),
                        {
                            name: 'multiple-choice',
                            id: '0-3-gender',
                            //@ts-expect-error
                            attributes: {
                                required: true,
                                multiple: false,
                                verticalAlign: true,
                                label: 'Qual é o seu <strong>género</strong>?',
                                choices: [
                                    {
                                        label: 'Homem',
                                        value: 'masculino',
                                    },
                                    {
                                        label: 'Mulher',
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
                        //@ts-expect-error
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
                            //@ts-expect-error
                            attributes: {
                                label: 'Indique a sua <strong>idade</strong>',
                                required: true,
                                setMin: true,
                                min: 18,
                            },
                        },
                        {
                            name: 'multiple-choice',
                            id: '0-6-frequency',
                            //@ts-expect-error
                            attributes: {
                                required: true,
                                multiple: false,
                                verticalAlign: false,
                                label: 'Indique a <strong>periodicidade</strong> preferida em relação às sessões.',
                                description:
                                    'Em média, os processos terapêuticos compreendem 1 sessão por semana ou 1 sessão de duas em duas semanas. \n  A PsiPlexus pede esta informação no sentido de agilizar o contacto com o profissional.',
                                choices: [
                                    {
                                        label: '1 vez por semana',
                                        value: 'once-a-week',
                                    },
                                    {
                                        label: '15 em 15 dias',
                                        value: 'two-in-two-weeks',
                                    },
                                    {
                                        label: 'Outro',
                                        value: 'other',
                                    },
                                ],
                            },
                        },
                        //@ts-expect-error
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
                            //@ts-expect-error
                            attributes: {
                                label: 'Indique o <strong>valor máximo em euros</strong> que estaria disponível para pagar por cada sessão.',
                                description:
                                    'Neste momento, os valores das consultas com os profissionais de saúde mental disponíveis na plataforma estão compreendidos entre 30€ e 60€ por sessão. \n A PsiPlexus pede esta informação no sentido de agilizar o contacto com o profissional.',
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
                            //@ts-expect-error
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
                                        label: 'Para outra pessoa adulta',
                                        value: 'adult',
                                    },
                                    {
                                        label: 'Para outra pessoa menor de idade',
                                        value: 'children',
                                    },
                                    {
                                        label: 'Outro',
                                        value: 'other',
                                    },
                                ],
                            },
                        },
                        //@ts-expect-error
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
                            //@ts-expect-error
                            attributes: {
                                classnames: 'first-block',
                                required: true,
                                label: 'Indique o <strong>motivo</strong> do pedido de consulta.',
                            },
                        },
                        {
                            name: 'multiple-choice',
                            id: '1-0-previous-experience-therapy',
                            //@ts-expect-error
                            attributes: {
                                required: true,
                                multiple: false,
                                verticalAlign: true,
                                label: 'Já teve <strong>acompanhamento</strong> em consultas de psicologia ou de psicoterapia?',
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
                        //@ts-expect-error
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
                            //@ts-expect-error
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
                        //@ts-expect-error
                        ...(immediateAvailabilityAnswer?.includes('other')
                            ? [
                                  {
                                      name: 'short-text',
                                      id: '1-1-1-immediate-availability-other',
                                      attributes: {
                                          classnames: 'first-block',
                                          required: true,
                                          label: 'Em que mês gostaria de ser contactado pela Psiplexus para marcar a sua consulta?',
                                      },
                                  },
                              ]
                            : []),
                        {
                            name: 'short-text',
                            id: '1-1-2-availability-describe',
                            //@ts-expect-error
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
                            //@ts-expect-error
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
                        //@ts-expect-error
                        ...(!preferentialConsultationType?.includes('online')
                            ? [
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
                              ]
                            : []),
                        //@ts-expect-error
                        ...(Object.keys(municipes).includes(locationAnswer)
                            ? [
                                  {
                                      id: '1-3-1-location-municipe',
                                      name: 'multiple-choice',

                                      attributes: {
                                          multiple: true,
                                          label: 'Indique o <strong>concelho</strong> da sua <strong>localização preferencial</strong> para a realização das consultas?',
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
                            //@ts-expect-error
                            attributes: {
                                required: true,
                                multiple: false,
                                verticalAlign: false,
                                label: 'Tem alguma preferência em relação ao <strong>género</strong> do profissional de saúde mental?',
                                choices: [
                                    {
                                        label: 'Homem',
                                        value: 'male',
                                    },
                                    {
                                        label: 'Mulher',
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
                            //@ts-expect-error
                            attributes: {
                                label: 'Indique o seu <strong>email</strong>.',
                                placeholder: 'Escreva o seu email aqui',
                            },
                        },
                        {
                            name: 'multiple-choice',
                            id: '1-6-contact-preference',
                            //@ts-expect-error
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
                        //@ts-expect-error
                        ...(contactPreferenceAnswer?.includes('call') || contactPreferenceAnswer?.includes('whatsapp')
                            ? [
                                  {
                                      name: 'number',
                                      id: '1-6-1-contact-preference-phone',
                                      attributes: {
                                          classnames: 'first-block',
                                          required: true,
                                          label: 'Por favor indique o seu número de telefone para ser contactado.',
                                      },
                                  },
                              ]
                            : []),
                        {
                            name: 'short-text',
                            id: '0-2-name',
                            //@ts-expect-error
                            attributes: {
                                required: true,
                                label: 'Indique o seu <strong>nome e apelido</strong>',
                            },
                        },
                        {
                            name: 'short-text',
                            id: '1-7-additional-information',
                            //@ts-expect-error
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
                        buttonsBgColor: '#D7772D',
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

                    const addPsys = psychologists?.data?.map((p: Object) => {
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
