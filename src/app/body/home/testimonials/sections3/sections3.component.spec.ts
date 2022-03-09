import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sections3Component } from './sections3.component';

describe('Sections3Component', () => {
  let component: Sections3Component;
  let fixture: ComponentFixture<Sections3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sections3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sections3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
