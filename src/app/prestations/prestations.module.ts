import { NgModule } from '@angular/core';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { CommonModule } from '@angular/common';

// Ajout d'une route

@NgModule({
  declarations: [PagePrestationsComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule
  ]
})
export class PrestationsModule { }
