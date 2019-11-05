import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { LoginModule } from './login/login.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UiComponent } from './ui/containers/ui/ui.component';

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
    NgbModule
  ],
  // Déclaration des services.
  providers: [],
  // Démarrage du composant.
  bootstrap: [AppComponent]

})
export class AppModule { }
