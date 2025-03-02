import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayInformedComponent } from './stay-informed.component';

describe('StayInformedComponent', () => {
  let component: StayInformedComponent;
  let fixture: ComponentFixture<StayInformedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StayInformedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StayInformedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
