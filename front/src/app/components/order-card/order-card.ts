import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'order-card',
  imports: [DatePipe],
  templateUrl: './order-card.html',
  styleUrl: './order-card.scss'
})
export class OrderCard {

  @Input()
  orderData: any
}
