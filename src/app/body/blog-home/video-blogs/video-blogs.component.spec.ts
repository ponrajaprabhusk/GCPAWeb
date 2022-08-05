import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoBlogsComponent } from './video-blogs.component';

describe('VideoBlogsComponent', () => {
  let component: VideoBlogsComponent;
  let fixture: ComponentFixture<VideoBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoBlogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
