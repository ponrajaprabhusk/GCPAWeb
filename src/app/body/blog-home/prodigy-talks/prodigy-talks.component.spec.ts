import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdigyTalksComponent } from './prodigy-talks.component';

describe('ProdigyTalksComponent', () => {
  let component: ProdigyTalksComponent;
  let fixture: ComponentFixture<ProdigyTalksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdigyTalksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdigyTalksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
