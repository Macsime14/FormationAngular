import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation/page-add-prestation.component';

const appRoutes: Routes = [
  { path: '',
    component: PagePrestationsComponent,
    data: { title: 'Prestations', label: 'Toutes les Prestations' },
  },
  { path: 'add',
    component: PageAddPrestationComponent,
    data: { title: 'Prestations', label: 'Ajouter une Prestation' },
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class PrestationsRoutingModule { }
