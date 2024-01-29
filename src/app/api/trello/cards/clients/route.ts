import { sendMail } from '@/services/mailService';
import { NextResponse } from 'next/server';

const emailHtml = (name: string) => `<html lang='pt'>
<head>
  <meta charset='UTF-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      background-color: #f4f4f4;
      color: #333;
      line-height: 1.6;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    p {
      font-size: 16px;
      margin-bottom: 10px;
    }

    strong {
      font-weight: bold;
    }

    em {
      font-style: italic;
    }
  </style>
</head>
<body>
  <div class='container'>
    <p>Olá <strong>${name}</strong>,</p>
    <p>Confirmamos a receção da sua inscrição na PsiPlexus. Muito obrigado por confiar em nós.</p>
    <p>Em breve, nas próximas 48 horas, um membro da nossa equipa vai entrar em contacto consigo pelo seu método de contacto preferencial. Vamos falar sobre os próximos passos e fazer algumas perguntas que fazem parte do nosso processo.</p>
    <p>Sabemos que procurar ajuda psicológica é um grande passo. Queremos assegurar que a sua privacidade e conforto são a nossa prioridade. Todo o processo é confidencial e tratado com o máximo respeito.</p>
    <p>Se tiver dúvidas ou preocupações, por favor, não hesite em <em>contactar-nos através deste email</em>.</p>
    <p>Com os melhores cumprimentos,<br>Equipa PsiPlexus</p>
  </div>
</body>
</html>`;

export async function POST(req: Request) {
    const apiKey = process.env.TRELLO_KEY;
    const trelloToken = process.env.TRELLO_TOKEN;

    const TRELLO_URL = `https://api.trello.com/1/cards?key=${apiKey}&token=${trelloToken}`;

    const { name, age, email, phone, motivation, id, contactFrom, consultLocation, location, advertiserID } =
        await req.json();

    const response = await fetch(`${TRELLO_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: `New User: ${name} - ${id}`,
            desc: `Name: ${name}\nAge: ${age}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${motivation}\nContactar por: ${contactFrom}\nConsulta: ${consultLocation}\nLocalização: ${location}\nAdvertiserID: ${advertiserID}`,
            idList: '651b50da8e3027a3df31fbb4',
        }),
    });
    if (!response.ok) {
        return NextResponse.error();
    }

    //send email
    await sendMail('Bem Vind@ à PsiPlexus!', email, emailHtml(name));

    const data = await response.json();

    if (data.status === 429) {
        NextResponse.json({ data: [] });
    }

    return NextResponse.json({ data });
}
