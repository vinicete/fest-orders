import { Order } from "src/orders/entities/order.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer{

  @PrimaryGeneratedColumn({name: 'cust_id'})
  id: number;
  @Column({name: 'cust_name'})
  name: string;
  @Column({name: 'cust_email'})
  email: string;
  @Column({name: 'cust_telephone'})
  telephone: string;

  @OneToMany(()=>Order,(order) => order.customer)
  orders: Order[];

}