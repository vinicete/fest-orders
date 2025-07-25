import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CustomersService } from "./customers.service";
import { CreateCustomerDto } from "./dtos/createCustomer.dto";

@Controller('customers')
export class CustomersController{
  
  constructor(private readonly customersService : CustomersService){

  }

  @Get()
  getCustomers(){
    return this.customersService.get()
  }

  @Get(':id')
  getCustomersById(@Param('id') id: string){
    return this.customersService.getById(+id)
  }

  @Post()
  createCustomer(@Body() dto: CreateCustomerDto){
    return this.customersService.create(dto)
  }

  @Delete(':id')
  deleteCustomer(@Param('id') id: string){
    return this.customersService.remove(+id)
  }

}