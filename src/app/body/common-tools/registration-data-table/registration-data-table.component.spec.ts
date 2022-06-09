import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationDataTableComponent } from './registration-data-table.component';

describe('RegistrationDataTableComponent', () => {
  let component: RegistrationDataTableComponent;
  let fixture: ComponentFixture<RegistrationDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationDataTableComponent ]
    })
    .compileComponents();
    
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
