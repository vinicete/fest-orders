import { Customer } from "src/customers/entities/customer.entity";
import { OrderItemResponseDto } from "./orderItemResponse.dto";


export class OrderResponseDto{

    id:number;
    orderPrice:number;
    date:Date;
    orderItems: OrderItemResponseDto[]
    customer: Customer
}

