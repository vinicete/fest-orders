import { Component } from '@angular/core';
import { OrderList } from '../order-list/order-list';

@Component({
  selector: 'order-grid',
  imports: [OrderList],
  templateUrl: './order-grid.html',
  styleUrl: './order-grid.scss'
})
export class OrderGrid {

}
