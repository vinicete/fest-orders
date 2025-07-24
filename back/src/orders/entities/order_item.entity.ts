import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { Order } from "./order.entity";
import { Item } from "src/items/entities/item.entity";


@Entity()
export class OrderItem{

  @Column()
  quantity:number;

  @PrimaryColumn()
  orderId:number;

  @PrimaryColumn()
  itemId:number;

  @ManyToOne(()=> Order, order => order.orderItems)
  order: Order;

  @ManyToOne(()=> Item, item => item.orderItems)
  item: Item;
}