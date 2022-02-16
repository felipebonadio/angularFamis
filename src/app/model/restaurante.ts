import { Endereco } from "./endereco";

export interface Restaurante{
    id:string;
    nome:string;
    cnpj:string;
    telefone:string;
    mesa:number;
    horarioAbertura:string;
    horarioEncerramento:string;
    endereco:Endereco;
}