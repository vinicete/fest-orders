import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { Order } from "./entities/order.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CustomersService } from "src/customers/customers.service";


@Injectable()
export class OrdersService{

  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    private readonly customerService : CustomersService
  ){}


  async get(){

    return await this.orderRepository.find()
  }

  async getById(id: number){
    const order = await this.orderRepository.findOneBy({ id })
      
    if (!order) {
      throw new NotFoundException(`Order with ID #${id} not found`)
    }

    return order
  }

  async createEmptyOrder(customerId: number){ //pedido vazio sem item
    const cust = await this.customerService.getById(customerId)
    if (!customerId) {
      throw new NotFoundException(`Customer with ID #${customerId} not found`)
    }
    const newOrder = this.orderRepository.create({customer: {id : customerId}})
    return await this.orderRepository.save(newOrder)
  }

  async createFullOrder(){} //pedido com itens

  async remove(id: number){
    const order = await this.getById(id)
      return await this.orderRepository.remove(order)
  }

}