import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'mtgAssistant';
    constructor(private router: Router) {

    }
	public navToCDevHelp() : void{
		this.router.navigate(['/devHelp']);
	}
}