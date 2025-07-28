import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'filter-modal',
  imports: [FormsModule],
  templateUrl: './filter-modal.html',
  styleUrl: './filter-modal.scss'
})
export class FilterModal {


  order: any
  activeModal = inject(NgbActiveModal)

   filters = {
    name: '',
    startDate: '',
    endDate: ''
  };

  applyFilters() {
    this.activeModal.close(this.filters);
  }

  clearFilters() {
    this.activeModal.dismiss('clear');
  }
}
