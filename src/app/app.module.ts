import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/general-modules/angular-material.module';
import { AppRountingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ImagesModule } from './modules/view-modules/module-images/images.module';
import { NavBarComponent } from './general-components/nav-bar/nav-bar.component';
import { HomeComponent } from './general-components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRountingModule,
    FormsModule,
    AngularMaterialModule,
    ImagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
