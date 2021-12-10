import { Client } from './client';
import { Collaborator } from './collaborator';
import { Consumer } from './consumer';

export interface Order {
  id: string;
  date: Date;
  status: string;
  discount: number;
  collaborator: Collaborator;
  client: Client;
  consumer: Consumer;
}
