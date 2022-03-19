import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedInSliderComponent } from './featured-in-slider.component';

describe('FeaturedInSliderComponent', () => {
  let component: FeaturedInSliderComponent;
  let fixture: ComponentFixture<FeaturedInSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedInSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedInSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
