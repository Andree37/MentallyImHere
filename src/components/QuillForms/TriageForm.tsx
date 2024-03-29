'use client';
import { Form, useFieldAnswer } from '@quillforms/renderer-core';
import '@quillforms/renderer-core/build-style/style.css';
// @ts-ignore
import { registerCoreBlocks } from '@quillforms/react-renderer-utils';

type TriageFormProps = {
    id: string;
};

type Answers = {
    [key: string]: {
        value: string | string[] | undefined;
    };
};

type TriageData = {
    answers: Answers;
};

registerCoreBlocks();

async function postAnswersOnTrello(id: string, data: Answers) {
    const response = await fetch(`/api/trello/cards/get-to-know/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data }),
    });

    if (!response.ok) {
        return;
    }

    return await response.json();
}

async function postAnswersOnMongo(id: string, data: Answers) {
    const response = await fetch(`/api/client/get-to-know/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data }),
    });

    if (!response.ok) {
        return;
    }

    return await response.json();
}

export default function TriageForm({ id }: TriageFormProps) {
    const genderAnswer = useFieldAnswer('gender') as string;
    const consultationForAnswer = useFieldAnswer('consultation-for') as string;
    const prevExperienceAnswer = useFieldAnswer('previous-experience-therapy') as string;

    return (
        <div className="h-[90vh] w-full">
            <Form
                formId={1}
                formObj={{
                    blocks: [
                        {
                            name: 'welcome-screen',
                            id: 'welcome',
                            attributes: {
                                label: 'Bem vind@!',
                                description: 'Este questionário ajuda-nos a conhecer-te um pouco melhor.',
                                buttonText: 'Começar',
                                attachment: {
                                    type: 'image',
                                    url: '/images/hero.png',
                                },
                            },
                        },
                        {
                            id: 'welcome-statement',
                            name: 'statement',
                            attributes: {
                                label: 'Este questionário ajuda-nos a encontrar o profissional mais adequado para ti.',
                                description: '(2 minutos)',
                                buttonText: 'Continuar',
                                quotationMarks: false,
                            },
                        },
                        {
                            name: 'multiple-choice',
                            id: 'gender',
                            attributes: {
                                required: true,
                                multiple: false,
                                verticalAlign: true,
                                label: 'Qual é o seu género?',
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
                                      id: 'auto-describe-gender',
                                      attributes: {
                                          classnames: 'first-block',
                                          required: true,
                                          label: 'Qual é o seu género?',
                                      },
                                  },
                              ]
                            : []),
                        {
                            name: 'multiple-choice',
                            id: 'consultation-for',
                            attributes: {
                                required: true,
                                multiple: false,
                                verticalAlign: false,
                                label: 'Para quem é o pedido de consulta com profissional de saúde?',
                                choices: [
                                    {
                                        label: 'Próprio',
                                        value: 'self',
                                    },
                                    {
                                        label: 'Outro familiar maior de idade',
                                        value: 'another-relative-over-eighteen',
                                    },
                                    {
                                        label: 'Outro familiar menor de idade',
                                        value: 'another-relative-below-eighteen',
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
                                      id: 'consultation-for-other',
                                      attributes: {
                                          classnames: 'first-block',
                                          required: true,
                                          label: 'Para quem seria a consulta?',
                                      },
                                  },
                              ]
                            : []),
                        {
                            name: 'multiple-choice',
                            id: 'previous-experience-therapy',
                            attributes: {
                                required: true,
                                multiple: false,
                                verticalAlign: true,
                                label: 'Experiência Prévia em Terapia?',
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
                                      id: 'prev-experience-yes',
                                      attributes: {
                                          classnames: 'first-block',
                                          required: true,
                                          label: 'Por favor descreva brevemente',
                                      },
                                  },
                              ]
                            : []),
                        {
                            name: 'multiple-choice',
                            id: 'availability-days',
                            attributes: {
                                required: true,
                                multiple: true,
                                verticalAlign: false,
                                label: 'Dias da semana que prefere',
                                description:
                                    'Recomendamos que selecione vários dias para a disponibilidade com o profissional de saúde',
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
                            id: 'availability-hours',
                            attributes: {
                                required: true,
                                multiple: true,
                                verticalAlign: false,
                                label: 'Períodos do dia que prefere',
                                description:
                                    'Recomendamos que selecione vários dias para a disponibilidade com o profissional de saúde',
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
                        {
                            name: 'multiple-choice',
                            id: 'professional-gender',
                            attributes: {
                                required: true,
                                multiple: false,
                                verticalAlign: false,
                                label: 'Género do Profissional de Saúde',
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
                            name: 'multiple-choice',
                            id: 'financial-availability',
                            attributes: {
                                required: true,
                                multiple: true,
                                verticalAlign: true,
                                label: 'Disponibilidade financeira',
                                description: 'Pode escolher várias respostas',
                                choices: [
                                    {
                                        label: '<20€ por sessão',
                                        value: 'less-than-20',
                                    },
                                    {
                                        label: '21€-30€ por sessão',
                                        value: 'twenty-thirty',
                                    },
                                    {
                                        label: '31€-50€ por sessão',
                                        value: 'thirty-fifty',
                                    },
                                    {
                                        label: '51€-70€ por sessão',
                                        value: 'fifty-seventy',
                                    },
                                    {
                                        label: '>71€ por sessão',
                                        value: 'seventy-plus',
                                    },
                                ],
                            },
                        },
                        {
                            name: 'short-text',
                            id: 'additional-information',
                            attributes: {
                                classnames: 'first-block',
                                required: false,
                                label: 'Alguma outra preferência, consideração ou informação que gostaria de partilhar?',
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
                        'label.hintText.key': 'Letra',
                        'block.defaultThankYouScreen.label':
                            'Obrigado por ter preenchido o formulário.\n\nEntraremos em contacto consigo o mais brevemente possível.',
                        'label.submitBtn': 'Submeter',
                    },
                    theme: {
                        buttonsBgColor: '#1664C0',
                        answersColor: 'black',
                    },
                }}
                onSubmit={async (data, { completeForm, setIsSubmitting }) => {
                    const triageData = data as TriageData;
                    // ensure we remove the previously set fields
                    if (triageData.answers['gender'].value?.[0] !== 'prefer-auto-describe') {
                        delete triageData.answers['auto-describe-gender'];
                    }

                    if (triageData.answers['consultation-for'].value?.[0] !== 'other') {
                        delete triageData.answers['consultation-for-other'];
                    }

                    if (triageData.answers['previous-experience-therapy'].value?.[0] !== 'yes') {
                        delete triageData.answers['prev-experience-yes'];
                    }

                    const answers = [];
                    for (const key in triageData.answers) {
                        answers.push({ [key]: triageData.answers[key].value });
                    }

                    // I know I am doing some typescript magic, but let me live :(
                    await postAnswersOnTrello(id, answers as unknown as Answers);
                    await postAnswersOnMongo(id, answers as unknown as Answers);

                    // show completed form after submit on trello and mongo
                    setIsSubmitting(false);
                    completeForm();
                }}
                applyLogic={false}
            />
        </div>
    );
}
