create schema pet;

alter table pets (
    id serial primary key,
    nome text not null, 
    dono text not null,
    raca text not null,
    idade int not null,
    date timestamp default now()
);



