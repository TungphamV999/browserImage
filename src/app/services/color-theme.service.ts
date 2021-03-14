import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorThemeService {

  constructor() { }
    // Color theme data sources
    private isThemeLightOnSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
    isThemeLightOn$: Observable<boolean> = this.isThemeLightOnSource.asObservable();
  
    // Change theme to light mode method
    turnOnLightTheme(): void {
      document.documentElement.setAttribute('color-theme', 'light');
      document.getElementsByTagName('html')[0].setAttribute('class', 'light-theme');
      this.isThemeLightOnSource.next(true);
    }
  
    // Change theme to dark mode method
    turnOnDarkTheme(): void {
      document.documentElement.setAttribute('color-theme', 'dark');
      document.getElementsByTagName('html')[0].setAttribute('class', 'dark-theme');
      this.isThemeLightOnSource.next(false);
    }

}
