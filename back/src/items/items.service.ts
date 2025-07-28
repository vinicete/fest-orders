import { Injectable, NotFoundException } from "@nestjs/common";
import { Item } from "./entities/item.entity";
import { CreateItemDto } from "./dtos/createItem.dto";
import { In, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export class ItemsService{

  constructor (
      @InjectRepository(Item)
      private readonly itemRepository: Repository<Item> ){}
    async get(){
      return await this.itemRepository.find()
    }
  
    async getById(id: number){
      const item = await this.itemRepository.findOneBy({ id })
  
      if (!item) {
        throw new NotFoundException(`Item with ID #${id} not found`)
      }
  
      return item
    }

    async findByIds(ids: number[]) {
      return this.itemRepository.findBy({
        id: In(ids), 
      });
    }
  
    async create(item: CreateItemDto){
  
      const newItem = this.itemRepository.create(item)
      return await this.itemRepository.save(newItem)
    }
  
    async remove(id: number){
  
      const item = await this.getById(id)
      return await this.itemRepository.remove(item)
    }
}