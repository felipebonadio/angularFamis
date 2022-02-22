import { Colaborador } from "./colaborador";
import { Produto } from "./produto";

export interface Mesa{
    id: string;
    number: number;
    colaborador: Colaborador;
    produto: Produto[];
}
