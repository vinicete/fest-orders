import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCardModal } from './order-card-modal';

describe('OrderCardModal', () => {
  let component: OrderCardModal;
  let fixture: ComponentFixture<OrderCardModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderCardModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderCardModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
