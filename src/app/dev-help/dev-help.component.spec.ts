import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevHelpComponent } from './dev-help.component';

describe('DevHelpComponent', () => {
  let component: DevHelpComponent;
  let fixture: ComponentFixture<DevHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
