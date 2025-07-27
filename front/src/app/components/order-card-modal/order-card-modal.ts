import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'order-card-modal',
  imports: [CurrencyPipe,DatePipe],
  standalone: true,
  templateUrl: './order-card-modal.html',
  styleUrl: './order-card-modal.scss'
})
export class OrderCardModal {
  activeModal = inject(NgbActiveModal)

  ngOnInit(): void {
    if (this.order) {
      this.calcTotal(this.order); 
    }
  }

  total: number = 0;

  calcTotal(order: any) {
    
    order.orderItems.forEach((item: any) => {
      this.total += item.price * item.quantity;
    });
  
  }
  
  @Input()
  order: any
}
