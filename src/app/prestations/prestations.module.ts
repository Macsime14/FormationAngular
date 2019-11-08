import { NgModule } from '@angular/core';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation/page-add-prestation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormPrestationComponent } from './components/form-prestation/form-prestation.component';
import { PageEditComponent } from './pages/page-edit-prestation/page-edit/page-edit.component';

// Ajout d'une route

@NgModule({
  declarations: [PagePrestationsComponent, PageAddPrestationComponent, FormPrestationComponent, PageEditComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class PrestationsModule {}
