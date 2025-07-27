import { DatePipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderCardModal } from '../order-card-modal/order-card-modal';

@Component({
  selector: 'order-card',
  imports: [DatePipe],
  templateUrl: './order-card.html',
  styleUrl: './order-card.scss'
})
export class OrderCard {

  @Input()
  orderData: any

  private modalService = inject(NgbModal);

  // 4. Crie um método para abrir o modal
  openModal() {
    // Abre o OrderModalComponent
    const modalRef = this.modalService.open(OrderCardModal, { size: 'lg' });
    
    // Passa os dados do pedido atual para a propriedade 'order' do modal
    modalRef.componentInstance.order = this.orderData;
  }
}
