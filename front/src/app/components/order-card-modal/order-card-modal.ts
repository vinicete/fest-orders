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

  @Input()
  order: any
}
