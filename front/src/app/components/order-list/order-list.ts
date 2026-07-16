import { Component, inject, Input } from '@angular/core';
import { OrderCard } from '../order-card/order-card';
import { HttpClient, HttpParams } from '@angular/common/http';

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

  @Input()
  set filters(value: any) {
    console.log("filtros:", value)
    this.fetchOrders(value);

  }



  ngOnInit(): void {
    this.fetchOrders()
  }

  fetchOrders(filters: any = {}): void {

    //jeito correto de passar params no ng
    let params = new HttpParams()

    if (filters?.name) {
      params = params.append('name', filters.name);
    }
    if (filters?.startDate) {
      params = params.append('startDate', filters.startDate);
    }
    if (filters?.endDate) {
      params = params.append('endDate', filters.endDate);
    }

    this.http.get<any[]>('http://52.15.54.131:3003/orders', {
      params
    })
      .subscribe(data => {
        this.orders = data;
        console.log("Pedidos:", this.orders)
        console.log("params", params)
      })
  }
}
