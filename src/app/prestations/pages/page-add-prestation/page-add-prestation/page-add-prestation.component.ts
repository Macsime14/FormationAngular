import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrestationsService } from 'src/app/prestations/services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-add-prestation',
  templateUrl: './page-add-prestation.component.html',
  styleUrls: ['./page-add-prestation.component.scss']
})
export class PageAddPrestationComponent implements OnInit {

  public title: string;
  public label: string;

  public items$: Observable<Prestation>;
  constructor(  private prestationService: PrestationsService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {

    this.route.data.subscribe((donnees) => {
      this.title = donnees.title;
      this.label = donnees.label;
        });
  }

  public add(item: Prestation) {
    console.log(item);
    this.prestationService.add(item).then((res) => {
      // res étant la réponse de l'api
      // this.router.navigate(['prestations']);
      // redirection relative par rapport à la route sur laquelle vous êtes.
      this.router.navigate(['../'], {relativeTo: this.route});
    });
  }
}
