import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SwitchModeService } from '../services/switch-mode.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit {
  logoName = 'Where in the world?';
  isDark = true;

  constructor(private switchMode: SwitchModeService) {}

  isDarkModeOn$ = this.switchMode.isDarkMode$;

  ngOnInit() {}

  changeMode() {
    this.isDark = !this.isDark;

    this.switchMode.handleSwitchMode(this.isDark);
  }
}
