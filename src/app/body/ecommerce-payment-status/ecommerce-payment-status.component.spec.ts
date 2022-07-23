import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommercePaymentStatusComponent } from './ecommerce-payment-status.component';

describe('EcommercePaymentStatusComponent', () => {
  let component: EcommercePaymentStatusComponent;
  let fixture: ComponentFixture<EcommercePaymentStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommercePaymentStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommercePaymentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
