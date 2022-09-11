import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmpRedirectComponent } from './amp-redirect.component';

describe('AmpRedirectComponent', () => {
  let component: AmpRedirectComponent;
  let fixture: ComponentFixture<AmpRedirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmpRedirectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmpRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
