import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoReportsComponent } from './video-reports.component';

describe('VideoReportsComponent', () => {
  let component: VideoReportsComponent;
  let fixture: ComponentFixture<VideoReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoReportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideoReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
