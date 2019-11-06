import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipe/total.pipe';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';



@NgModule({
  declarations: [TotalPipe, TableauLightComponent, TableauLightComponent],
  imports: [
    CommonModule
  ],
  exports: [TotalPipe, TableauLightComponent]
})
export class SharedModule { }
