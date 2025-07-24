import { OrderItem } from "src/orders/entities/order_item.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Item{

  @PrimaryGeneratedColumn({name: 'item_id'})
    id: number;
    @Column({name: 'item_name'})
    name: string;
    @Column({name: 'item_desc'})
    description: string;
    @Column({name: 'item_price'})
    price: string;

    @OneToMany(()=>OrderItem, orderItem=>orderItem.item)
    orderItems: OrderItem[]
}