import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdigyHistoryComponent } from './prodigy-history.component';

describe('ProdigyHistoryComponent', () => {
  let component: ProdigyHistoryComponent;
  let fixture: ComponentFixture<ProdigyHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdigyHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdigyHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
