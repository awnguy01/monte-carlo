import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiCalcComponent } from './pi-calc.component';

describe('PiCalcComponent', () => {
  let component: PiCalcComponent;
  let fixture: ComponentFixture<PiCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiCalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
