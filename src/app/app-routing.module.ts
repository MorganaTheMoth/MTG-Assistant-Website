import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./Components/home/home.component";
import {DevHelpComponent} from "./Components/dev-help/dev-help.component";
import {LifeTrackerComponent} from "./Components/life-tracker/life-tracker.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
	  {path:'devHelp', component: DevHelpComponent},
	  {path: 'lifeTracker', component: LifeTrackerComponent},
	  {path:'home', component: HomeComponent, pathMatch:"full"},
	  {path:"**", redirectTo:'home'}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
