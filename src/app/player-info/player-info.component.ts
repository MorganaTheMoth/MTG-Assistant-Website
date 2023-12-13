import { Component } from '@angular/core';

@Component({
  selector: 'app-player-info',
  standalone: false,
  templateUrl: './player-info.component.html',
  styleUrl: './player-info.component.css'
})
export class PlayerInfoComponent {
   lifeTotal: number = 40

   increment = () => {
    this.lifeTotal += 1
   }
   decrement = () => {
    this.lifeTotal -= 1
   }
}
