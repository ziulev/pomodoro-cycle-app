import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorerComponent } from './scorer.component';

describe('ScorerComponent', () => {
  let component: ScorerComponent;
  let fixture: ComponentFixture<ScorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
