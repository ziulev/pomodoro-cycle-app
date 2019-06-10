import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferencesContainerComponent } from './preferences-container.component';

describe('PreferencesContainerComponent', () => {
  let component: PreferencesContainerComponent;
  let fixture: ComponentFixture<PreferencesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferencesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferencesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
