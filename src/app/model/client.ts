import { Address } from "./address";

export interface Client{
    id: string;
    name: string;
    lastName: string;
    phone: string;
    cpf: string;
    email: string;
    password: string;
    adress: Address;
}