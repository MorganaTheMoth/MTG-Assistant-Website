import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {HomeComponent} from "./Components/home/home.component";
import {DevHelpComponent} from "./Components/dev-help/dev-help.component";
import {LifeTrackerComponent} from "./Components/life-tracker/life-tracker.component";
import {MatButtonModule} from "@angular/material/button";


const appRoutes: Routes = [
	{path:'devHelp', component: DevHelpComponent},
	{path: 'lifeTracker', component: LifeTrackerComponent},
	{path:'home', component: HomeComponent, pathMatch:"full"},
	{path:"**", redirectTo:'home'}
];

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		RouterModule.forRoot(
			appRoutes, {enableTracing: true}
		),
		MatButtonModule
	],
  declarations: [
    AppComponent,
    HomeComponent,
    DevHelpComponent,
    LifeTrackerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
