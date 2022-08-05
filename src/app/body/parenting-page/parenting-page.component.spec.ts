import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentingPageComponent } from './parenting-page.component';

describe('ParentingPageComponent', () => {
  let component: ParentingPageComponent;
  let fixture: ComponentFixture<ParentingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
