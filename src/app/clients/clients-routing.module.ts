import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageClientsComponent } from './page/page-clients/page-clients.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: PageClientsComponent },
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
