import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageClientsComponent } from './page/page-clients/page-clients.component';
import { RouterModule, Routes } from '@angular/router';
import { PageAddClientComponent } from './page/page-add-client/page-add-client/page-add-client.component';

const appRoutes: Routes = [
  { path: '', component: PageClientsComponent },
  {
    path: 'add',
    component: PageAddClientComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class ClientsRoutingModule { }
