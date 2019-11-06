import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { UiModule } from './ui/ui.module';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';

registerLocaleData(localeFr, 'fr-FR', localeFrExtra);

@NgModule({
  declarations: [
    AppComponent
  ],
  // Imports au démarrage de la page
  imports: [
    BrowserModule,
    UiModule,
    LoginModule,
    FontAwesomeModule,
    NgbModule,
    AppRoutingModule
  ],
  // Déclaration des services.
  providers: [{provide: LOCALE_ID, useValue: 'fr-FR' }],
  // Démarrage du composant.
  bootstrap: [AppComponent]

})
export class AppModule { }
