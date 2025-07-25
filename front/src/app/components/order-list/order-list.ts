import { Component } from '@angular/core';
import { OrderCard } from '../order-card/order-card';

@Component({
  selector: 'order-list',
  imports: [OrderCard],
  templateUrl: './order-list.html',
  styleUrl: './order-list.scss'
})
export class OrderList {

}
