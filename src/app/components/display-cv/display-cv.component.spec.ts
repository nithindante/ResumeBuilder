import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCVComponent } from './display-cv.component';

describe('DisplayCVComponent', () => {
  let component: DisplayCVComponent;
  let fixture: ComponentFixture<DisplayCVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayCVComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
