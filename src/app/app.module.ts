import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  // Imports au démarrage de la page
  imports: [
    BrowserModule,
    UiModule,
    LoginModule
  ],
  // Déclaration des services.
  providers: [],
  // Démarrage du composant.
  bootstrap: [AppComponent]
})
export class AppModule { }
