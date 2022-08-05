import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcpaBookComponent } from './gcpa-book.component';

describe('GcpaBookComponent', () => {
  let component: GcpaBookComponent;
  let fixture: ComponentFixture<GcpaBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GcpaBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GcpaBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
