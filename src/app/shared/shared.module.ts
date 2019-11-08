import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipe/total.pipe';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { StateDirective } from './directives/state.directive';
import { TableauDarkComponent } from './components/tableau-dark/tableau-dark/tableau-dark.component';
import { TemplateModule } from '../templates/template.module';
import { ButtonComponent } from './components/button/button/button.component';
import { RouterModule } from '@angular/router';
import { ActionComponent } from './components/action/action/action.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [TotalPipe, TableauLightComponent, TableauLightComponent,
    StateDirective, TableauDarkComponent, ButtonComponent, ActionComponent],
  imports: [
    CommonModule,
    TemplateModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [TotalPipe, TableauLightComponent, StateDirective, TableauDarkComponent, TemplateModule, ButtonComponent, ActionComponent]
})
export class SharedModule { }
