CREATE TABLE advertisers
(
    id    UUID primary key NOT NULL,
    name  TEXT             NOT NULL,
    email TEXT             NOT NULL,
    phone TEXT             NOT NULL
    -- continue this after
);

CREATE TABLE clients
(
    id                       UUID PRIMARY KEY,
    name                     TEXT NOT NULL,
    gender                   TEXT,
    age                      INT  NOT NULL,
    email                    TEXT NOT NULL,
    location_district        TEXT NOT NULL,
    location_municipality    TEXT NOT NULL,
    contact_preference       TEXT,
    auto_describe_gender     TEXT,
    contact_preference_phone TEXT,
    advertiserID             UUID REFERENCES advertisers (id)
);

CREATE TABLE client_requests
(
    id                             uuid PRIMARY KEY,
    frequency                      TEXT,
    price                          INT                          NOT NULL,
    consultation_for               TEXT,
    motivation                     TEXT                         NOT NULL,
    previous_experience_therapy    TEXT,
    immediate_availability         TEXT,
    availability_describe          TEXT                         NOT NULL,
    preferential_consultation_type TEXT,
    professional_gender            TEXT,
    frequency_for_other            TEXT,
    consultation_for_other         TEXT,
    prev_experience_yes            TEXT,
    immediate_availability_other   TEXT,
    client_id                      UUID REFERENCES clients (id) NOT NULL
);


CREATE TABLE psis
(
    id                    UUID PRIMARY KEY,
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
    preferred_fee_type    TEXT    NOT NULL  -- fraction, percentual, fixed-rate
);


CREATE TABLE psi_availabilities
(
    id       UUID PRIMARY KEY,
    psi_id   UUID REFERENCES psis (id) NOT NULL,
    date     TIMESTAMP                 NOT NULL,
    duration INT                       NOT NULL
);


CREATE TABLE matches
(
    id                 UUID PRIMARY KEY,
    client_id          UUID REFERENCES clients (id) NOT NULL,
    psi_id             UUID REFERENCES psis (id),
    approved           BOOLEAN                      NOT NULL,
    canceled_by_client BOOLEAN                      NOT NULL,
    canceled_by_psi    BOOLEAN                      NOT NULL
);


CREATE TABLE appointments
(
    id                 UUID PRIMARY KEY,
    match_id           UUID REFERENCES matches (id) NOT NULL,
    date               TIMESTAMP                    NOT NULL,
    duration           INT                          NOT NULL,
    canceled_by_client BOOLEAN                      NOT NULL,
    canceled_by_psi    BOOLEAN                      NOT NULL,
    completed          BOOLEAN                      NOT NULL,
    appointment_price  DECIMAL                      NOT NULL,
    fee_id             UUID REFERENCES fees (id)    NOT NULL
);


CREATE TABLE fees
(
    id           UUID PRIMARY KEY,
    total_amount DECIMAL NOT NULL, -- 20%
    paid_status  TEXT    NOT NULL, -- paid, not paid, partially paid
    type         TEXT    NOT NULL  -- fraction, percentual, fixed-rate
);


CREATE TABLE fee_chunks
(
    id      UUID PRIMARY KEY,
    fee_id  UUID REFERENCES fees (id) NOT NULL,
    amount  DECIMAL                   NOT NULL,
    paid    BOOLEAN                   NOT NULL,
    sent_at TIMESTAMP                 NOT NULL
);
