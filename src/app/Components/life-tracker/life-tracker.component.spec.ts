import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeTrackerComponent } from './life-tracker.component';

describe('LifeTrackerComponent', () => {
  let component: LifeTrackerComponent;
  let fixture: ComponentFixture<LifeTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeTrackerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LifeTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
