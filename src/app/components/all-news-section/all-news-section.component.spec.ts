import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllNewsSectionComponent } from './all-news-section.component';

describe('AllNewsSectionComponent', () => {
  let component: AllNewsSectionComponent;
  let fixture: ComponentFixture<AllNewsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllNewsSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllNewsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
