import { Component, inject } from '@angular/core';
import { OrderList } from '../order-list/order-list';
import { FilterModal } from '../filter-modal/filter-modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'order-grid',
  imports: [OrderList],
  templateUrl: './order-grid.html',
  styleUrl: './order-grid.scss'
})
export class OrderGrid {

  private modalService = inject(NgbModal);
  
  filters: any = {}

  async openFilterModal() {
      
      const modalRef = this.modalService.open(FilterModal, { size: 'lg' });

      try{

        const result = await modalRef.result
        this.filters = result
        console.log("Filtros: ",this.filters)
      }
      catch(error){

        console.log( error);
        if (error === 'clear') {
          this.filters = {};
        }
      }
      
  }
}
