import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationDetailsAdminComponent } from './registration-details-admin.component';

describe('RegistrationDetailsAdminComponent', () => {
  let component: RegistrationDetailsAdminComponent;
  let fixture: ComponentFixture<RegistrationDetailsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationDetailsAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationDetailsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
