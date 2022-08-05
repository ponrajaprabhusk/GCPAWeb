import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentingComponent } from './parenting.component';

describe('ParentingComponent', () => {
  let component: ParentingComponent;
  let fixture: ComponentFixture<ParentingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
