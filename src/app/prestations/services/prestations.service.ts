import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { fakePrestations } from './fake-prestations';
import { State } from 'src/app/shared/enums/state.enum';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  private pCollection: Prestation[];
  constructor() {
    this.collection =  fakePrestations;
  }
  /* Pas besoin d'utiliser get ou set car Angular appel le get ou le set en fonction du type d'appel.
  */
  // Get Collection
  public get collection() {
    return this.pCollection;
  }
  // Set Collectiion
  public set collection(col: Prestation[]) {
    this.pCollection = col;
  }
  // Update Item in collection
  public update(item: Prestation, state: State) {
    console.log(item);
    item.state = state;
    console.log(item);
  }
  // Add Item in Collection

  // Delete Item in Collection

  // Get Item By Id
}
