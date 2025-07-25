import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderGrid } from './order-grid';

describe('OrderGrid', () => {
  let component: OrderGrid;
  let fixture: ComponentFixture<OrderGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
