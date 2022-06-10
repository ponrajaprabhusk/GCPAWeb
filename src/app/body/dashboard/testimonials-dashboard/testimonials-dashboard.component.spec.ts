import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsDashboardComponent } from './testimonials-dashboard.component';

describe('TestimonialsDashboardComponent', () => {
  let component: TestimonialsDashboardComponent;
  let fixture: ComponentFixture<TestimonialsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
