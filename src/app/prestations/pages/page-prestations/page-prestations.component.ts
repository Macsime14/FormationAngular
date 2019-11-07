import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation';
import { State } from 'src/app/shared/enums/state.enum';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {
  public collectiona: Prestation[];
  public headers: string[];
  public states = State;
  // public states = Object.values(State);
  public title: string;
  public label: string;
  public labelBtn: string;
  public routeBtn: string;


  constructor(
    private prestationService: PrestationsService,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    this.collectiona = this.prestationService.collection;
    this.headers = [
      'Type',
      'Client',
      'NbJours',
      'TjmHT',
      'Total HT',
      'Total TTC',
      'State',
      'Commentaire'
    ];
    // console.log(this.prestationService.collection);
    // console.log(this.route);
    this.route.data.subscribe((donnees) => {
      console.log(donnees);
      this.title = donnees.title;
      this.label = donnees.label;
      this.labelBtn = 'Ajouter Prestation';
      this.routeBtn = 'add';
    });

  }

  public update(item: any, event: any) {
    // console.log(item, event.target.value);
    this.prestationService.update(item, event.target.value);
  }
}
