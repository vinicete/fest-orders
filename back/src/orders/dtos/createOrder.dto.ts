import { OrderItemDto } from "./orderItem.dto";


export class CreateOrderDto{
  customerId: number;
  orderItems: OrderItemDto[]
}