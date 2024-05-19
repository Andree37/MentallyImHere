create table advertisers
(
    id           uuid                       not null
        primary key,
    name         text                       not null,
    email        text                       not null,
    phone        text                       not null,
    social_media text                       not null,
    iban         text                       not null,
    created_at   timestamp(3) default now() not null,
    updated_at   timestamp(3) default now() not null
);

alter table advertisers
    owner to postgres;

create table patients
(
    id                       uuid                       not null
        primary key,
    name                     text                       not null,
    gender                   text,
    age                      integer                    not null,
    email                    text                       not null,
    location_district        text                       not null,
    location_municipality    text                       not null,
    contact_preference       text,
    contact_preference_phone text,
    advertiser_id            uuid
        references advertisers,
    created_at               timestamp(3) default now() not null,
    updated_at               timestamp(3) default now() not null
);

alter table patients
    owner to postgres;

create table patient_requests
(
    id                             uuid                       not null
        primary key,
    screened                       boolean      default false not null,
    notes                          text         default ''::text,
    frequency                      text,
    price                          integer                    not null,
    consultation_for               text,
    motivation                     text                       not null,
    had_experience_therapy         boolean,
    describe_experience_therapy    text,
    immediate_availability         boolean,
    other_availability             text,
    availability_describe          text                       not null,
    preferential_consultation_type text,
    professional_gender            text,
    additional_info                text,
    patient_id                     uuid                       not null
        references patients,
    created_at                     timestamp(3) default now() not null,
    updated_at                     timestamp(3) default now() not null
);

alter table patient_requests
    owner to postgres;

create table psis
(
    id                    uuid                       not null
        primary key,
    name                  text                       not null,
    gender                text                       not null,
    age                   integer                    not null,
    specialization        text                       not null,
    phone                 text                       not null,
    email                 text                       not null,
    location_district     text                       not null,
    location_municipality text                       not null,
    experience_years      integer                    not null,
    consultation_type     text                       not null,
    availability          text                       not null,
    cost_from             integer                    not null,
    cost_to               integer                    not null,
    opp                   text                       not null,
    approved              boolean                    not null,
    preferred_fee_type    text                       not null,
    created_at            timestamp(3) default now() not null,
    updated_at            timestamp(3) default now() not null
);

alter table psis
    owner to postgres;

create table psi_availabilities
(
    id         uuid                       not null
        primary key,
    psi_id     uuid                       not null
        references psis,
    date       timestamp(3)               not null,
    duration   integer                    not null,
    created_at timestamp(3) default now() not null,
    updated_at timestamp(3) default now() not null
);

alter table psi_availabilities
    owner to postgres;

create table matches
(
    id                  uuid                       not null
        primary key,
    patient_request_id  uuid                       not null
        references patient_requests,
    psi_id              uuid
        references psis,
    approved            boolean                    not null,
    canceled_by_patient boolean                    not null,
    canceled_by_psi     boolean                    not null,
    created_at          timestamp(3) default now() not null,
    updated_at          timestamp(3) default now() not null,
    open                boolean      default true
);

alter table matches
    owner to postgres;

create table fees
(
    id           uuid                       not null
        primary key,
    total_amount numeric                    not null,
    paid_status  text                       not null,
    type         text                       not null,
    created_at   timestamp(3) default now() not null,
    updated_at   timestamp(3) default now() not null
);

alter table fees
    owner to postgres;

create table fee_chunks
(
    id         uuid                       not null
        primary key,
    fee_id     uuid                       not null
        references fees,
    amount     numeric                    not null,
    paid       boolean                    not null,
    sent_at    timestamp(3)               not null,
    created_at timestamp(3) default now() not null,
    updated_at timestamp(3) default now() not null
);

alter table fee_chunks
    owner to postgres;

create table appointments
(
    id                  uuid                       not null
        primary key,
    match_id            uuid                       not null
        references matches,
    date                timestamp(3)               not null,
    duration            integer                    not null,
    canceled_by_patient boolean                    not null,
    canceled_by_psi     boolean                    not null,
    completed           boolean                    not null,
    appointment_price   numeric                    not null,
    fee_id              uuid                       not null
        references fees,
    created_at          timestamp(3) default now() not null,
    updated_at          timestamp(3) default now() not null
);

alter table appointments
    owner to postgres;
