import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'create-modal',
  imports: [],
  templateUrl: './create-modal.html',
  styleUrl: './create-modal.scss'
})
export class CreateModal {

  activeModal = inject(NgbModal)

}
