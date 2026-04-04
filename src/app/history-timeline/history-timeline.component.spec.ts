import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryTimelineComponent } from './history-timeline.component';

describe('HistoryTimelineComponent', () => {
  let component: HistoryTimelineComponent;
  let fixture: ComponentFixture<HistoryTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryTimelineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoryTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
