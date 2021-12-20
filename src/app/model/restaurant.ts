import { Address } from "./address";

export interface Restaurant{
    id:string;
    name:string;
    cnpj:string;
    phone:string;
    consumer:number;
    openTime:string;
    closeTime:string;
    address:Address;
}