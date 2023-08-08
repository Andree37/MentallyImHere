"use client";

import Script from "next/script";

const initialState = {};

const content = {
  old_faqs: [
    {
      question: "Como encontram o terapeuta certo para mim?",
      answer:
        "Para encontrar o terapeuta certo, explore o nosso diretório e aplique filtros, como especialidade, localização e estilo de terapia. Leia os perfis dos psicologos para encontrar uma combinação que atenda às suas necessidades.",
    },
    {
      question: "Quais são os custos envolvidos nas sessões de terapia?",
      answer:
        "Os custos das sessões de terapia variam de acordo com o terapeuta e o tipo de sessão. As informações sobre preços estarão disponíveis no perfil de cada terapeuta.",
    },
    {
      question: "Como posso agendar uma sessão com um terapeuta?",
      answer:
        "De momento, ara agendar uma sessão, insira as suas informações no formulário em cima e de seguida entraremos em contacto consigo. No futuro poderá selecionar o terapeuta de sua escolha e usar o nosso sistema de agendamento seguro na aplicação para marcar uma consulta.",
    },
    {
      question:
        "A aplicação oferece sessões de terapia presenciais, por vídeo ou áudio?",
      answer:
        "A aplicação oferece sessões de terapia por vídeo e áudio, dependendo das preferências do terapeuta e do cliente.",
    },
    {
      question: "Posso alterar ou cancelar uma sessão de terapia agendada?",
      answer:
        "Para alterar ou cancelar uma sessão de terapia agendada, envie-nos um email ao mesmo que lhe responder com a disponibildade. Observe a política de cancelamento do terapeuta para evitar possíveis taxas.",
    },
    {
      question:
        "Como a aplicação garante a segurança e privacidade das minhas informações?",
      answer:
        "A aplicação garante a segurança e privacidade das suas informações, utilizando criptografia e medidas de segurança rigorosas. Consulte nossa Política de Privacidade para obter mais detalhes.",
    },
    {
      question: "Quais são os métodos de pagamento aceites?",
      answer:
        "Os métodos de pagamento aceites incluem cartões de crédito, débito e outros meios de pagamento eletrónicos. As opções disponíveis serão exibidas durante o processo de pagamento.",
    },
    {
      question:
        "Os psicologos disponíveis na aplicação são licenciados e qualificados?",
      answer:
        "Sim, todos os psicologos disponíveis na aplicação são licenciados e qualificados, com experiência nas áreas em que atuam.",
    },
    {
      question:
        "A aplicação oferece recursos adicionais para auxiliar no meu progresso terapêutico?",
      answer:
        "A aplicação oferece recursos adicionais, como dicas e exercícios terapêuticos, para auxiliar no seu progresso e crescimento pessoal.",
    },
    {
      question:
        "Como posso entrar em contato com o suporte ao cliente para esclarecer dúvidas ou resolver problemas?",
      answer:
        "Para entrar em contato com o suporte ao cliente, envie a sua pergunta ou preocupação para o mesmo email que lhe responder depois de preencher o formulário. A nossa equipa responderá prontamente para ajudá-lo.",
    },
  ],
  faqs: [
    {
      question: "Como posso entrar em contato caso tenha alguma questão?",
      answer: (
        <>
          `Para entrar em contato com o suporte ao cliente, envie a sua pergunta
          ou preocupação para o email{" "}
          <a href="mailto:infogenipsi@gmail.com">infogenipsi@gmail.com</a>. A
          nossa equipa responderá prontamente para ajudá-lo.
        </>
      ),
    },
    {
      question: "Como encontram o terapeuta certo para mim?",
      answer:
        "Encontramos o melhor candidato para si com ajuda de inteligência artificial, utilizando a motivação descrita para a consulta.",
    },
    {
      question:
        "Existe alguma aplicação, ou website para conseguir seguir o meu progresso?",
      answer:
        "De momento, estamos em fase de construção da plataforma. Entretanto, queremos conectar clientes e profissionais de modo a que consiga começar as suas sessões.",
    },
  ],
};

export default function Faqs() {
  return (
    <>
      <section id="faqs" className="my-32">
        <div className="mx-auto px-4 sm:px-12 xl:max-w-5xl xl:px-0">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">
            Perguntas Frequentes
          </h2>
          <div className="divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800">
            {content.faqs.map(({ question, answer }, index) => (
              <div key={index}>
                <dl className="faq mx-auto max-w-2xl">
                  <dt className="text-lg">
                    <button
                      type="button"
                      className="flex w-full items-start justify-between py-6 text-left text-gray-400"
                      aria-controls={`faq-${index}`}
                      data-active="false"
                    >
                      <span className="font-medium text-gray-900 dark:text-white">
                        {question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        <svg
                          className={`arrow-down h-6 w-6 transform duration-300`}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </button>
                  </dt>
                  <dd
                    className={`faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out`}
                    id={`faq-${index}`}
                  >
                    <p className="pb-6 text-base text-gray-600 dark:text-gray-400">
                      {answer}
                    </p>
                  </dd>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Script>
        {`let faqs = document.querySelectorAll(".faq");

for (let i = 0; i < faqs.length; i++) {
    let answer = faqs[i].querySelector(".faq-answer");
    let icon = faqs[i].querySelector(".arrow-down");

    faqs[i].addEventListener("click", () => {
        for (let j = 0; j < faqs.length; j++) {
            let answer2 = faqs[j].querySelector(".faq-answer");
            let icon2 = faqs[j].querySelector(".arrow-down");

            if (faqs[i] != faqs[j]) {
                answer2.style.maxHeight = "0px";
                icon2.classList.replace("rotate-180", "rotate-0");
            }
        }

        if (icon.classList.contains("rotate-180")) {
            answer.style.maxHeight = 0 + "px";
            icon.classList.replace("rotate-180", "rotate-0");
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
            icon.classList.replace("rotate-0", "rotate-180");
        }
    });
}
`}
      </Script>
    </>
  );
}
