import { Component } from '@angular/core';

// Déclaration en tant que WebComponent
@Component({
  // Appeler dans index.html
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'formation-angular';
}
