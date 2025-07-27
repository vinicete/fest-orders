import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { Order } from "./entities/order.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CustomersService } from "src/customers/customers.service";
import { OrderItem } from "./entities/order_item.entity";
import { OrderResponseDto } from "./dtos/orderResponse.dto";
import { OrderItemResponseDto } from "./dtos/orderItemResponse.dto";


@Injectable()
export class OrdersService{

  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(OrderItem)
    private readonly orderItemRepository: Repository<OrderItem>,
    private readonly customerService : CustomersService
  ){}



  async get(){

    const orders =  await this.orderRepository.find({
      relations: {
        customer: true,   
        orderItems: {     
          item: true,     
        },
      },
    });

    if(!orders){
      throw new NotFoundException()
    }

    const newOrders : OrderResponseDto[] = orders.map((order)=>{
      
      const res : OrderResponseDto = new OrderResponseDto()

      let orderPrice : number = 0

      let orderItems : OrderItemResponseDto[] = order.orderItems.map((item)=>{
        let itemRes : OrderItemResponseDto = new OrderItemResponseDto()

        const itemPrice = Number.parseFloat(item.item.price)
        
        itemRes.name = item.item.name;
        itemRes.description = item.item.description;
        itemRes.price = itemPrice;
        itemRes.quantity = item.quantity;
        
        orderPrice+=itemPrice

        return itemRes
      })

      res.id = order.id;
      res.orderPrice = orderPrice
      res.date = order.date;
      res.orderItems = orderItems;
      res.customer = order.customer;

      
      return res 
    })

    


    return newOrders
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
    if (!cust) {
      throw new NotFoundException(`Customer with ID #${customerId} not found`)
    }
    const newOrder = this.orderRepository.create({customer: {id : customerId}})
    return await this.orderRepository.save(newOrder)
  }

  async createOrder(customerId: number, itemIds: number[], quantity: number){ //pedido com itens
    const cust = await this.customerService.getById(customerId)
    if (!cust) {
      throw new NotFoundException(`Customer with ID #${customerId} not found`)
    }

    /*if(!itemIds){
      throw new Exception('')
    }*/

    const newOrder = this.orderRepository.create({customer: {id : customerId}})
    const order = await this.orderRepository.save(newOrder)
    itemIds.forEach(async item => {
      const newOrderItem = this.orderItemRepository
      .create({
        orderId: newOrder.id,
        itemId: item,
        quantity: quantity
      })

      await this.orderItemRepository.save(newOrderItem)
    });
    
    return order
  } 

  async remove(id: number){
    const order = await this.getById(id)
      return await this.orderRepository.remove(order)
  }

}