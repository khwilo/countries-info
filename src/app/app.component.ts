import { Component } from '@angular/core';
import { SwitchModeService } from './services/switch-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Countries Information Display';

  constructor(private switchMode: SwitchModeService) {}

  isDarkModeOn$ = this.switchMode.isDarkMode$;
}
