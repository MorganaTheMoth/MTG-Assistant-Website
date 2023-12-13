import { Component, OnDestroy } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil, takeWhile } from 'rxjs/operators';

@Component({
	selector: 'app-player-info',
	standalone: false,
	templateUrl: './player-info.component.html',
	styleUrl: './player-info.component.css',
})
export class PlayerInfoComponent {
	lifeTotal: number = 40;
	privateChangeInterval: number = 125;

	private destroy$: Subject<void> = new Subject<void>();
	private counting = false;

	startIncrementing() {
		this.counting = true;
		this.lifeTotal++;
		interval(this.privateChangeInterval)
			.pipe(takeWhile(() => this.counting),
			takeUntil(this.destroy$))
			.subscribe(() => {
				this.lifeTotal++;
			});
	}

	stopDecrementing() {
		this.counting = false;
		this.destroy$.next();
		this.destroy$.complete();
	}

	startDecrementing() {
		this.counting = true;
		this.lifeTotal--;
		interval(this.privateChangeInterval)
			.pipe(takeWhile(() => this.counting),
			takeUntil(this.destroy$))
			.subscribe(() => {
				this.lifeTotal--;
			});
	}

	stopIncrementing() {
		this.counting = false;
		this.destroy$.next();
		this.destroy$.complete();
	}


	ngOnDestroy() {
		this.stopIncrementing();
		this.stopDecrementing();
	  }
}
