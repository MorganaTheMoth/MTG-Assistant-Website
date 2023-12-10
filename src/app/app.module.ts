import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Components/HomeGroup/home/home.component';
import { MainPageSuperComponent } from './Components/MainPageGroup/main-page-super/main-page-super.component';
import { DevHelpComponent } from './dev-help/dev-help.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainPageSuperComponent,
    DevHelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
