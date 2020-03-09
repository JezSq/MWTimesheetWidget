import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoursAdditionalComponent } from './hours-additional.component';

describe('HoursAdditionalComponent', () => {
  let component: HoursAdditionalComponent;
  let fixture: ComponentFixture<HoursAdditionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoursAdditionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoursAdditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
