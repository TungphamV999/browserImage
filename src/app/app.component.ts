import { Component } from '@angular/core';
import { ColorThemeService } from './services/color-theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(
    private colorThemeService: ColorThemeService
  ) {
    this.colorThemeService.turnOnDarkTheme()
  }

  title = 'PicsBrowser';
}
