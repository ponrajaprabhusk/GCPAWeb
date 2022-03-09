import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sections2Component } from './sections2.component';

describe('Sections2Component', () => {
  let component: Sections2Component;
  let fixture: ComponentFixture<Sections2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sections2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sections2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
