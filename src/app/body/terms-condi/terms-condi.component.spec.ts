import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsCondiComponent } from './terms-condi.component';

describe('TermsCondiComponent', () => {
  let component: TermsCondiComponent;
  let fixture: ComponentFixture<TermsCondiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsCondiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsCondiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
