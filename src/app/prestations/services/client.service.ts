import { Injectable } from '@angular/core';
import { fakeClients } from './fake-clients';
import { Client } from 'src/app/shared/models/client';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Injectable({
  providedIn: 'root'
})


export class ClientService {
  private pCollection: Client[];

  constructor() {
    this.collection = fakeClients;
  }

  // Get Collection
  public get collection() {
    return this.pCollection;
  }
  // Set Collectiion
  public set collection(col: Client[]) {
    this.pCollection = col;
  }

  // Update Item in collection
  public update(item: Client, state: StateClient) {
    console.log(item);
    item.state = state;
    console.log(item);
  }
}
