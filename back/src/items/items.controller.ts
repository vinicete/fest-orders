import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ItemsService } from "./items.service";
import { CreateItemDto } from "./dtos/createItem.dto";


@Controller('items')
export class ItemsController{

  constructor(private readonly itemsService : ItemsService){}

  @Get()
  getItems(){
    return this.itemsService.get()
  }

  @Get(':id')
  getItemsById(@Param('id') id: string){
    return this.itemsService.getById(+id)
  }

  @Post()
    createCustomer(@Body() dto: CreateItemDto){
      return this.itemsService.create(dto)
    }
  
    @Delete(':id')
    deleteCustomer(@Param('id') id: string){
      return this.itemsService.remove(+id)
    }
}