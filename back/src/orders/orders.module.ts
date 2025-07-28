import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrdersController } from "./orders.controller";
import { OrdersService } from "./orders.service";
import { Order } from "./entities/order.entity";
import { CustomersModule } from "src/customers/customers.module";
import { OrderItem } from "./entities/order_item.entity";
import { ItemsModule } from "src/items/items.module";



@Module({
  imports:[
    TypeOrmModule.forFeature([Order,OrderItem]),
    CustomersModule,
    ItemsModule
  ],
  controllers:[OrdersController],
  providers:[OrdersService]
})
export class OrdersModule{}