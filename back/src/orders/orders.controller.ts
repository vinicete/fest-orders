import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { OrdersService } from "./orders.service";
import { CreateEmptyOrderDto } from "./dtos/createEmptyOrder.dto";


@Controller('orders')
export class OrdersController{

  constructor(private readonly ordersService : OrdersService){}

  @Get()
  getItems(){
    return this.ordersService.get()
  }

  @Get(':id')
  getItemsById(@Param('id') id: string){
    return this.ordersService.getById(+id)
  }

  @Post()
  createCustomer(@Body() dto: CreateEmptyOrderDto){
    return this.ordersService.createEmptyOrder(dto.customerId)
  }
  
  @Delete(':id')
  deleteCustomer(@Param('id') id: string){
    return this.ordersService.remove(+id)
  }
}