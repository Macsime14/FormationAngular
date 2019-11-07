import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipe/total.pipe';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { StateDirective } from './directives/state.directive';
import { TableauDarkComponent } from './components/tableau-dark/tableau-dark/tableau-dark.component';
import { TemplateModule } from '../templates/template.module';
import { ButtonComponent } from './components/button/button/button.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TotalPipe, TableauLightComponent, TableauLightComponent, StateDirective, TableauDarkComponent, ButtonComponent],
  imports: [
    CommonModule,
    TemplateModule,
    RouterModule
  ],
  exports: [TotalPipe, TableauLightComponent, StateDirective, TableauDarkComponent, TemplateModule, ButtonComponent]
})
export class SharedModule { }
