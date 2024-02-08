import clientPromise from '@/lib/mongo';
import pgPromise from '@/lib/postg';
import { NextResponse } from 'next/server';
import { v4 } from 'uuid';

export async function POST(request: Request) {
    const client = await clientPromise;
    const db = client.db('Genipsi');
    const res = await request.json();

    const document = await db.collection('clients-quill').insertOne(res);

    try {
        // insert it into PG as well
        const clientPG = await pgPromise;
        const client_id = v4();
        clientPG.query(
            'INSERT INTO clients(id, name, gender, age, email, location_district, location_municipality, contact_preference, contact_preference_phone, advertiser_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
            [
                client_id,
                res.data.name,
                res.data.gender[0] === 'prefer-auto-describe' ? res.data['auto-describe-gender'] : res.data.gender[0],
                res.data.age,
                res.data.email,
                res.data.location,
                res.data['location-municipe'],
                res.data['contact-preference'][0],
                res.data['contact-preference-phone'],
                res.data.advertiserID === 'Unknown' ? null : res.data.advertiserID,
            ],
            (err, r) => {
                if (err) {
                    // error
                    console.log('error inserting into clients table', err);
                    return NextResponse.error();
                }

                // insert into client_requests
                const client_request_id = v4();
                clientPG.query(
                    'INSERT INTO client_requests(id, frequency, price, consultation_for, motivation, had_experience_therapy, describe_experience_therapy, immediate_availability, other_availability, availability_describe, preferential_consultation_type, professional_gender, additional_info, client_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)',
                    [
                        client_request_id,
                        res.data.frequency[0] === 'other' ? res.data['frequency-for-other'] : res.data.frequency[0],
                        res.data.price,
                        res.data['consultation-for'][0] === 'other'
                            ? res.data['consultation-for-other']
                            : res.data['consultation-for'][0],
                        res.data.motivation,
                        res.data['previous-experience-therapy'][0] === 'yes',
                        res.data['prev-experience-yes'],
                        res.data['immediate-availability'][0] === 'immediate',
                        res.data['immediate-availability-other'],
                        res.data['availability-describe'],
                        res.data['preferential-consultation-type'][0],
                        res.data['professional-gender'][0],
                        res.data['additional-information'],
                        client_id,
                    ],
                    (err) => {
                        if (err) {
                            // error
                            console.log('error inserting into client_requests table', err);
                        }
                    },
                );
            },
        );
    } catch (e) {
        console.log('error inserting into PG', e);
    }

    return NextResponse.json({ document });
}
