import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { OrderGrid } from '../order-grid/order-grid';

@Component({
  selector: 'app-home',
  imports: [Navbar,OrderGrid],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
