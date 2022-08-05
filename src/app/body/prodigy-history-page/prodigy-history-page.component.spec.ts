import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdigyHistoryPageComponent } from './prodigy-history-page.component';

describe('ProdigyHistoryPageComponent', () => {
  let component: ProdigyHistoryPageComponent;
  let fixture: ComponentFixture<ProdigyHistoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdigyHistoryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdigyHistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
