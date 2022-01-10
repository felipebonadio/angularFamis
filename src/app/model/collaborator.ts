import { Address } from './address';
import { Restaurant } from './restaurant';

export interface Collaborator {
  id: string;
  name: string;
  lastName: string;
  phone: string;
  cpf: string;
  email: string;
  password: string;
  address: Address;
  role: string;
  restaurant: Restaurant;
}
