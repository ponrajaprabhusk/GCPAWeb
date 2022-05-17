import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOfRegistrationsComponent } from './number-of-registrations.component';

describe('NumberOfRegistrationsComponent', () => {
  let component: NumberOfRegistrationsComponent;
  let fixture: ComponentFixture<NumberOfRegistrationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberOfRegistrationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberOfRegistrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
