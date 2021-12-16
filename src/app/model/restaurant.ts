import { Address } from "./address";

export interface Restaurant{
    id:string;
    name:string;
    cnpj:string;
    phone:string;
    address:Address;
}