import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderlayComponent } from './underlay.component';

describe('UnderlayComponent', () => {
  let component: UnderlayComponent;
  let fixture: ComponentFixture<UnderlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
