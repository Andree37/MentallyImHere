CREATE TABLE advertisers
(
    id    UUID primary key NOT NULL,
    name  TEXT             NOT NULL,
    email TEXT             NOT NULL,
    phone TEXT             NOT NULL,
    social_media TEXT NOT NULL,
    iban TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL default now(),
    updated_at TIMESTAMP NOT NULL default now()
);

CREATE TABLE patients
(
    id                       UUID PRIMARY KEY,
    name                     TEXT NOT NULL,
    gender                   TEXT,
    age                      INT  NOT NULL,
    email                    TEXT NOT NULL,
    location_district        TEXT NOT NULL,
    location_municipality    TEXT NOT NULL,
    contact_preference       TEXT,
    contact_preference_phone TEXT,
    advertiser_id             UUID REFERENCES advertisers (id),
    created_at TIMESTAMP NOT NULL default now(),
    updated_at TIMESTAMP NOT NULL default now()
);

CREATE TABLE patient_requests
(
    id                             uuid PRIMARY KEY,
    screened                       BOOLEAN                      NOT NULL default false,
    notes                          TEXT default '',
    frequency                      TEXT,
    price                          INT                          NOT NULL,
    consultation_for               TEXT,
    motivation                     TEXT                         NOT NULL,
    had_experience_therapy    BOOLEAN,
    describe_experience_therapy    TEXT,
    immediate_availability         BOOLEAN,
    other_availability              TEXT,
    availability_describe          TEXT                         NOT NULL,
    preferential_consultation_type TEXT,
    professional_gender            TEXT,
    additional_info                TEXT                         ,
    patient_id                      UUID REFERENCES patients (id) NOT NULL,
    created_at TIMESTAMP NOT NULL default now(),
    updated_at TIMESTAMP NOT NULL default now()
);


CREATE TABLE psis
(
    id                    UUID PRIMARY KEY,
    name                  TEXT    NOT NULL,
    gender                TEXT    NOT NULL,
    age                   INT     NOT NULL,
    specialization        TEXT    NOT NULL,
    phone                 TEXT    NOT NULL,
    email                 TEXT    NOT NULL,
    location_district     TEXT    NOT NULL,
    location_municipality TEXT    NOT NULL,
    experience_years      INT     NOT NULL,
    consultation_type     TEXT    NOT NULL,
    availability          TEXT    NOT NULL, -- we have to remove this in a way
    cost_from             INT     NOT NULL,
    cost_to               INT     NOT NULL,
    opp                   TEXT    NOT NULL,
    approved              BOOLEAN NOT NULL,
    preferred_fee_type    TEXT    NOT NULL,  -- fraction, percentual, fixed-rate
    created_at TIMESTAMP NOT NULL default now(),
    updated_at TIMESTAMP NOT NULL default now()
);


CREATE TABLE psi_availabilities
(
    id       UUID PRIMARY KEY,
    psi_id   UUID REFERENCES psis (id) NOT NULL,
    date     TIMESTAMP                 NOT NULL,
    duration INT                       NOT NULL,
    created_at TIMESTAMP NOT NULL default now(),
    updated_at TIMESTAMP NOT NULL default now()
);


CREATE TABLE matches
(
    id                 UUID PRIMARY KEY,
    patient_request_id  UUID REFERENCES patient_requests (id) NOT NULL,
    psi_id             UUID REFERENCES psis (id),
    approved           BOOLEAN                      NOT NULL,
    canceled_by_patient BOOLEAN                      NOT NULL,
    canceled_by_psi    BOOLEAN                      NOT NULL,
    created_at TIMESTAMP NOT NULL default now(),
    updated_at TIMESTAMP NOT NULL default now()
);


CREATE TABLE fees
(
    id           UUID PRIMARY KEY,
    total_amount DECIMAL NOT NULL, -- 20%
    paid_status  TEXT    NOT NULL, -- paid, not paid, partially paid
    type         TEXT    NOT NULL,  -- fraction, percentual, fixed-rate
    created_at TIMESTAMP NOT NULL default now(),
    updated_at TIMESTAMP NOT NULL default now()
);


CREATE TABLE fee_chunks
(
    id      UUID PRIMARY KEY,
    fee_id  UUID REFERENCES fees (id) NOT NULL,
    amount  DECIMAL                   NOT NULL,
    paid    BOOLEAN                   NOT NULL,
    sent_at TIMESTAMP                 NOT NULL,
    created_at TIMESTAMP NOT NULL default now(),
    updated_at TIMESTAMP NOT NULL default now()
);

CREATE TABLE appointments
(
    id                 UUID PRIMARY KEY,
    match_id           UUID REFERENCES matches (id) NOT NULL,
    date               TIMESTAMP                    NOT NULL,
    duration           INT                          NOT NULL,
    canceled_by_patient BOOLEAN                      NOT NULL,
    canceled_by_psi    BOOLEAN                      NOT NULL,
    completed          BOOLEAN                      NOT NULL,
    appointment_price  DECIMAL                      NOT NULL,
    fee_id             UUID REFERENCES fees (id)    NOT NULL,
    created_at TIMESTAMP NOT NULL default now(),
    updated_at TIMESTAMP NOT NULL default now()
);
