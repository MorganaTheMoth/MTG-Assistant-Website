import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageSuperComponent } from './main-page-super.component';

describe('MainPageSuperComponent', () => {
  let component: MainPageSuperComponent;
  let fixture: ComponentFixture<MainPageSuperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageSuperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageSuperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
