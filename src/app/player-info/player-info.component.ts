import {Component, OnDestroy, OnInit, ViewChild, ElementRef} from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil, takeWhile } from 'rxjs/operators';
import {Element} from "@angular/compiler";

@Component({
	selector: 'app-player-info',
	standalone: false,
	templateUrl: './player-info.component.html',
	styleUrl: './player-info.component.css',
})
export class PlayerInfoComponent implements OnInit{
	lifeTotal: number = 40;
	privateChangeInterval: number = 125;

	private destroy$: Subject<void> = new Subject<void>();
	private counting = false;
	@ViewChild('lifeTrackingWrapper',  {read: ElementRef, static : true}) lifeTracker!: ElementRef;

	ngOnDestroy() {
		this.stopIncrementing();
		this.stopDecrementing();
	}
	constructor() {
	}

	ngOnInit(): void {
		this.lifeTracker.nativeElement.addEventListener('wheel', this.scrollEventManager, false);
	}

	//changeing the scope of the function
	scrollEventManager = (wheelEvent: WheelEvent): void => {
		if(wheelEvent.deltaY > 0) {
			this.startDecrementing();
			this.stopDecrementing();
		}
		else{
			this.startIncrementing();
			this.stopIncrementing();
		}
	}

	public startIncrementing() : void {
		this.counting = true;
		this.lifeTotal++;
		interval(this.privateChangeInterval)
			.pipe(takeWhile(() => this.counting),
			takeUntil(this.destroy$))
			.subscribe(() => {
				this.lifeTotal++;
			});
	}

	public stopDecrementing() : void {
		this.counting = false;
		this.destroy$.next();
		this.destroy$.complete();
	}

	public startDecrementing() : void {
		this.counting = true;
		this.lifeTotal--;
		interval(this.privateChangeInterval)
			.pipe(takeWhile(() => this.counting),
			takeUntil(this.destroy$))
			.subscribe(() => {
				this.lifeTotal--;
			});
	}

	public stopIncrementing() : void{
		this.counting = false;
		this.destroy$.next();
		this.destroy$.complete();
	}
}
