import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleTimerComponent } from './circle-timer.component';

describe('CircleTimerComponent', () => {
  let component: CircleTimerComponent;
  let fixture: ComponentFixture<CircleTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
