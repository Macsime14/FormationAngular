import { Directive, HostBinding, Input, OnChanges } from '@angular/core';
import { State } from '../enums/state.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  constructor() {
    console.log(this.appState);
  }

  @Input() appState: State; // A remplace avec any
  // Bind de class
  @HostBinding('class') hostAttr: string;

  ngOnChanges(): void {
    console.log(this.appState);
    this.hostAttr = this.formatClasse(this.appState);
  }
  // :string => format de retour de la fonction
  public formatClasse(state: State): string { // A remplace avec any ou stateClient
    return `state-${state.normalize('NFD').replace(/[\u0300-\u036f\s]/g, '').toLowerCase()
  }`;
  }

}

// appState vaut Annulé   => state-annule
// appState vaut Option   => state-option
// appState vaut Confirmé => state-confirme
// On veut binder l'attribut class du host élement td avec ce string
