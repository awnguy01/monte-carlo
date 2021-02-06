import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorySimComponent } from './inventory-sim.component';

describe('InventorySimComponent', () => {
  let component: InventorySimComponent;
  let fixture: ComponentFixture<InventorySimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventorySimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventorySimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
