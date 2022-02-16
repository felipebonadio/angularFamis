import { Endereco } from './endereco';
import { Restaurante } from './restaurante';

export interface Colaborador {
  id: string;
  nome: string;
  sobrenome: string;
  telefone: string;
  cpf: string;
  email: string;
  senha: string;
  endereco: Endereco;
  funcao: string;
  restaurante: Restaurante;
}
