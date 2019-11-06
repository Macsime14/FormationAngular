import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { ClientService } from 'src/app/prestations/services/client.service';

@Component({
  selector: 'app-page-clients',
  templateUrl: './page-clients.component.html',
  styleUrls: ['./page-clients.component.scss']
})
export class PageClientsComponent implements OnInit {
  public collection: Client[];
  public headers: string[];
  public states = StateClient;
  public title: string;
  public label: string;
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.collection = this.clientService.collection;
    this.headers = [
      'Name',
      'Email',
    //  'Id',
      'State'
    ];
    this.title = 'Clients';
    this.label = 'Tous les Fucking Clients';
  }
  public update(item: any, event: any) {
    // console.log(item, event.target.value);
    this.clientService.update(item, event.target.value);
  }
}
