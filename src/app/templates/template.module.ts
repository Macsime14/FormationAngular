import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateAComponent } from './template-a/template-a.component';
import { TemplateBComponent } from './template-b/template-b.component';



@NgModule({
  declarations: [TemplateAComponent, TemplateBComponent],
  imports: [
    CommonModule
  ],
  exports: [TemplateBComponent, TemplateAComponent]
})
export class TemplateModule { }
