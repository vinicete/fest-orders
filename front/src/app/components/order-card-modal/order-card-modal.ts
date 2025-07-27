import { Component, Input } from '@angular/core';

@Component({
  selector: 'order-card-modal',
  imports: [],
  templateUrl: './order-card-modal.html',
  styleUrl: './order-card-modal.scss'
})
export class OrderCardModal {
  @Input()
  order: any
}
