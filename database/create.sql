create schema pet;

create table pet.post (
    id serial primary key,
    nome text not null, 
    dono text not null,
    raca text not null,
    idade int not null,
    date timestamp default now()
);



