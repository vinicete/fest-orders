import { Body, Controller, Delete, Get, Param, Post, Query } from "@nestjs/common";
import { OrdersService } from "./orders.service";
import { CreateEmptyOrderDto } from "./dtos/createEmptyOrder.dto";
import { CreateOrderDto } from "./dtos/createOrder.dto";
import { OrderFilterDto } from "./dtos/orderFilter.dto";


@Controller('orders')
export class OrdersController{

  constructor(private readonly ordersService : OrdersService){}

  @Get()
  getOrders(@Query() filterDto: OrderFilterDto){
    return this.ordersService.get(filterDto)
  }

  @Get(':id')
  getOrdersById(@Param('id') id: string){
    return this.ordersService.getById(+id)
  }

  @Post(':empty')
  createEmptyOrder(@Body() dto: CreateEmptyOrderDto){
    return this.ordersService.createEmptyOrder(dto.customerId)
  }

  @Post()
  createOrder(@Body() dto: CreateOrderDto){
    return this.ordersService.createOrder(dto.customerId,dto.orderItems)
  }
  
  @Delete(':id')
  deleteOrder(@Param('id') id: string){
    return this.ordersService.remove(+id)
  }
}