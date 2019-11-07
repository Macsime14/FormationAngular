import { Component, ChangeDetectionStrategy } from '@angular/core';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';


// Déclaration en tant que WebComponent
@Component({
  // Appeler dans index.html
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public title = 'formation-angular';
  public faCoffee = faDollarSign;
}
