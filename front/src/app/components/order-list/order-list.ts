import { Component, inject } from '@angular/core';
import { OrderCard } from '../order-card/order-card';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'order-list',
  standalone: true,
  imports: [OrderCard],
  templateUrl: './order-list.html',
  styleUrl: './order-list.scss'
})
export class OrderList {

  private http = inject(HttpClient)
  orders: any[] = []

  ngOnInit():void{
    this.fetchOrders()
  }

  fetchOrders():void{

    this.http.get<any[]>('http://localhost:3000/orders')
    .subscribe(data=>{
      this.orders = data;
      console.log("Pedidos:", this.orders)
    })
  }
}
