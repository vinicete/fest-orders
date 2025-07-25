import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrdersController } from "./orders.controller";
import { OrdersService } from "./orders.service";
import { Order } from "./entities/order.entity";
import { CustomersModule } from "src/customers/customers.module";
import { OrderItem } from "./entities/order_item.entity";



@Module({
  imports:[
    TypeOrmModule.forFeature([Order,OrderItem]),
    CustomersModule],
  controllers:[OrdersController],
  providers:[OrdersService]
})
export class OrdersModule{}