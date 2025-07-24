import { Customer } from "src/customers/entities/customer.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderItem } from "./order_item.entity";

@Entity()
export class Order{

  @PrimaryGeneratedColumn({name: 'ord_id'})
  id: number;
  @CreateDateColumn({name: 'ord_date'})
  date: Date;

  @ManyToOne(()=>Customer, (customer) => customer.id)
  @JoinColumn({name: 'cust_id'})
  customer: Customer

  @OneToMany(()=>OrderItem, orderItem => orderItem.order)
  orderItems: OrderItem[]

}