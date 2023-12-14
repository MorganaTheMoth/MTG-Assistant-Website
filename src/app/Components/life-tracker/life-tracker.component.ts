import { Component } from '@angular/core';
import { PlayerInfoComponent } from 'src/app/player-info/player-info.component';
import {toArray} from "rxjs";

@Component({
  selector: 'app-life-tracker',
  standalone: false,
  templateUrl: './life-tracker.component.html',
  styleUrl: './life-tracker.component.css'
})
export class LifeTrackerComponent {

	public top_row_cells: number = 2;
	public top_row_array : any;
	public bottom_row_array :any;
	public bottom_row_cells: number = 2;
	constructor() {
		this.bottom_row_array = this.GenItteratableArray(this.bottom_row_cells);
		this.top_row_array = this.GenItteratableArray(this.top_row_cells);
	}
	//plea se understand i hate everything about this
	GenItteratableArray(i : number) : any {
		console.log(i)
		return new Array(i).fill(0);
	}
}
