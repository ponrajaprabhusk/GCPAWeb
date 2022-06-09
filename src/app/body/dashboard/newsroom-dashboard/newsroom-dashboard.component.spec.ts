import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsroomDashboardComponent } from './newsroom-dashboard.component';

describe('NewsroomDashboardComponent', () => {
  let component: NewsroomDashboardComponent;
  let fixture: ComponentFixture<NewsroomDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsroomDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsroomDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
