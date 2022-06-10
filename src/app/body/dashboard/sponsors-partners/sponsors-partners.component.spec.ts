import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorsPartnersComponent } from './sponsors-partners.component';

describe('SponsorsPartnersComponent', () => {
  let component: SponsorsPartnersComponent;
  let fixture: ComponentFixture<SponsorsPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsorsPartnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorsPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
