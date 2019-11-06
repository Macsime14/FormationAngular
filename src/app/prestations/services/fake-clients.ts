import { Client } from 'src/app/shared/models/client';

export const fakeClients: Client[] = [
  new Client({
    id: '1',
    email: 'maxime@gmail.com',
    name: 'Maxime',
  }),
  new Client({
    id: '2',
    email: 'toto@gmail.com',
    name: 'toto',
  }),
];
