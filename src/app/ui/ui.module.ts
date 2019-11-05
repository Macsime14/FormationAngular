import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './containers/ui/ui.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { CoderbaseUiModule } from '@coderbase/ui';


@NgModule({
  declarations: [UiComponent, HeaderComponent, FooterComponent, NavComponent],
  // Permet d'exporter URI Component pour qu'il soit utiliser dans app component
  exports: [UiComponent],
  imports: [
    CommonModule,
    CoderbaseUiModule
  ]
})
export class UiModule { }
