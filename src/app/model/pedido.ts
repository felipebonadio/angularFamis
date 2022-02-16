import { Colaborador } from './colaborador';
import { Mesa } from './mesa';
import { Produto } from './produto';

export interface Pedido {
  id: string;
  data: Date;
  status: string; 
  colaborador: Colaborador;
  produto: Produto[];
  mesa: Mesa;
}
