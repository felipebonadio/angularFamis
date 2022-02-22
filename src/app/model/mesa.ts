import { Colaborador } from "./colaborador";
import { Produto } from "./produto";

export interface Mesa{
    id: string;
    numero: number;
    colaborador: Colaborador;
    produto: Produto[];
}
