import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectionViewComponent } from './home-section-view.component';

describe('HomeSectionViewComponent', () => {
  let component: HomeSectionViewComponent;
  let fixture: ComponentFixture<HomeSectionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSectionViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeSectionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
