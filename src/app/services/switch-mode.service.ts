import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwitchModeService {
  private isDark = new BehaviorSubject<boolean>(true);
  isDarkMode$ = this.isDark.asObservable();

  constructor() {}

  handleSwitchMode(value: boolean) {
    this.isDark.next(value);
  }
}
