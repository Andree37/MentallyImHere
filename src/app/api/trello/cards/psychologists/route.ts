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

    a {
      color: #0066cc;
      text-decoration: none;
      font-weight: bold;
    }

    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class='container'>
    <p>Olá <strong>${name}</strong>,</p>
    <p>Espero que este e-mail o/a encontre bem.</p>
    <p>É com grande satisfação que confirmamos a sua pré-inscrição na plataforma PsiPlexus. Estamos entusiasmados por poder contar consigo.</p>
    <p>Como dito no email anterior, queremos informá-lo/a de como funciona a plataforma e responder a dúvidas que possam existir.</p>
    <p>Procuramos o contacto direto com quem se regista na plataforma PsiPlexus porque valorizamos a relação que é estabelecida e a comunicação que acreditamos que deve ser clara e objetiva.</p>
    <p>Para tal, gostaríamos de marcar uma reunião rápida online ou por chamada consigo. Pode utilizar este link - <a href='https://calendly.com/help-psiplexus/30min' target='_blank'>https://calendly.com/help-psiplexus/30min</a> - para fazer a marcação.</p>
    <p>Uma vez mais, obrigado por se registar na nossa plataforma e, connosco, facilitar o acesso aos cuidados de saúde mental, tornando mais acessível a ligação entre quem procura ajuda psicológica e a pessoa que a oferece.</p>
    <p>Qualquer dúvida disponha.</p>
    <p>Com os melhores cumprimentos,<br>Equipa Psiplexus</p>
  </div>
</body>
</html>`;

export async function POST(req: Request) {
    const apiKey = process.env.TRELLO_KEY;
    const trelloToken = process.env.TRELLO_TOKEN;

    const TRELLO_URL = `https://api.trello.com/1/cards?key=${apiKey}&token=${trelloToken}`;

    const {
        name,
        email,
        phone,
        specialization,
        location,
        experienceYears,
        consultationType,
        availability,
        cost,
        opp,
        gender,
    } = await req.json();

    const response = await fetch(`${TRELLO_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: `New Psychologist: ${name}`,
            desc: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSpecialization: ${specialization}\nLocation: ${location}\nExperience Years: ${experienceYears}\nConsultation Type: ${consultationType}\nAvailability: ${availability}\nCost: ${cost}\nCédula OPP:${opp}\nGénero:${gender}`,
            idList: '651fe040adbc46b5976d294e',
        }),
    });
    if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.status);
    }

    //send email
    await sendMail('Apresentação PsiPlexus', email, emailHtml(name));

    const data = await response.json();

    return NextResponse.json({ data });
}
