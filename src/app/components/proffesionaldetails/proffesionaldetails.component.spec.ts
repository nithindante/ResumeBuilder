import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProffesionaldetailsComponent } from './proffesionaldetails.component';

describe('ProffesionaldetailsComponent', () => {
  let component: ProffesionaldetailsComponent;
  let fixture: ComponentFixture<ProffesionaldetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProffesionaldetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProffesionaldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
