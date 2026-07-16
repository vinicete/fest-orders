import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'create-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './create-modal.html',
  styleUrl: './create-modal.scss'
})
export class CreateModal {

  activeModal = inject(NgbActiveModal)

  customers: any[] = []
  items: any[] = []

  private http = inject(HttpClient)


  // O que está selecionado nos dropdowns
  selectedCustomerId: number | null = null;
  selectedItemId: number | null = null;
  selectedQuantity: number = 1;

  // Nosso "carrinho" de itens para o pedido
  currentOrderItems: any[] = [];


  // Adiciona o item selecionado ao nosso "carrinho"
  addItemToOrder(): void {
    if (!this.selectedItemId || this.selectedQuantity <= 0) {
      console.log("Nao achou")
      return; // Não faz nada se não houver item selecionado ou a quantidade for inválida
    }

    const itemToAdd = this.items.find(i => i.id === this.selectedItemId);

    if (itemToAdd) {
      console.log("Adicionando")
      this.currentOrderItems.push({
        itemId: itemToAdd.id,
        name: itemToAdd.name, // Guarda o nome para exibir na lista
        quantity: this.selectedQuantity
      });
      // Reseta os campos para a próxima adição
      this.selectedItemId = null;
      this.selectedQuantity = 1;
    }
  }

  // Remove um item do carrinho pelo seu índice
  removeItem(index: number): void {
    this.currentOrderItems.splice(index, 1);
  }

  // Monta o DTO final e fecha o modal
  saveOrder(): void {
    if (!this.selectedCustomerId || this.currentOrderItems.length === 0) {
      alert('Selecione um cliente e adicione pelo menos um item.');
      return;
    }

    const itemsDto: any[] = this.currentOrderItems.map(item => ({
      itemId: item.itemId,
      quantity: item.quantity
    }))

    // Monta o objeto final para enviar de volta
    const finalOrderDto = {
      customerId: this.selectedCustomerId,
      orderItems: itemsDto
    };


    this.http.post('http://52.15.54.131:3003/orders', finalOrderDto)
      .subscribe({
        next: () => {
          this.activeModal.close(finalOrderDto);
        },
        error: (err) => {
          console.error(err)
        }
      })
  }

  ngOnInit() {
    this.fetchCustomers()
    this.fetchItems()
  }

  fetchCustomers(): void {

    this.http.get<any[]>('http://52.15.54.131:3003/customers')
      .subscribe(data => {
        this.customers = data
        console.log(this.customers)
      })
  }

  fetchItems() {
    this.http.get<any[]>('http://52.15.54.131:3003/items')
      .subscribe(data => {
        this.items = data
        console.log(this.items)
      })
  }


}
