import { Injectable, NotFoundException } from "@nestjs/common";
import { Between, FindOptionsWhere, ILike, Repository } from "typeorm";
import { Order } from "./entities/order.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CustomersService } from "src/customers/customers.service";
import { OrderItem } from "./entities/order_item.entity";
import { OrderResponseDto } from "./dtos/orderResponse.dto";
import { OrderItemResponseDto } from "./dtos/orderItemResponse.dto";
import { OrderItemDto } from "./dtos/orderItem.dto";
import { OrderFilterDto } from "./dtos/orderFilter.dto";
import { ItemsService } from "src/items/items.service";


@Injectable()
export class OrdersService{

  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(OrderItem)
    private readonly orderItemRepository: Repository<OrderItem>,
    private readonly customerService : CustomersService,
    private readonly itemService : ItemsService
    
  ){}



  async get(filters: OrderFilterDto){

    //filtragem
    const { name, startDate, endDate } = filters;

    const whereConditions: FindOptionsWhere<Order> = {};

    if (name) {
      whereConditions.customer = { name: ILike(`%${name}%`) };
    }

    if (startDate && endDate) {
      whereConditions.date = Between(new Date(startDate), new Date(endDate));
    }

    
    const orders =  await this.orderRepository.find({
      where : whereConditions,
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

      let orderPrice : number = 0 //orderPrice é o valor unitario dos itens somados, nao o valor total, segui dessa forma pois é assim que esta no pedidos.json, mas eu poderia mudar

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

  async createOrder(customerId: number, orderItems: OrderItemDto[]){ //pedido com itens
    const cust = await this.customerService.getById(customerId)
    if (!cust) {
      throw new NotFoundException(`Customer with ID #${customerId} not found`)
    }

    const itemIds = orderItems.map(item => item.itemId);
    const items = await this.itemService.findByIds(itemIds);

    if (items.length !== itemIds.length) {
      throw new NotFoundException('Some of the provided Ids wasn\'t found!');
    }

    /*if(!itemIds){
      throw new Exception('')
    }*/

    const newOrder = this.orderRepository.create({customer: {id : customerId}})
    const order = await this.orderRepository.save(newOrder)

    orderItems.forEach(async item => {
      const newOrderItem = this.orderItemRepository
      .create({
        orderId: newOrder.id,
        itemId: item.itemId,
        quantity: item.quantity
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