import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateCustomerDto } from "./dtos/createCustomer.dto";
import { Repository } from "typeorm";
import { Customer } from "./entities/customer.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { error } from "console";

@Injectable()
export class CustomersService{
  
  constructor (
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer> ){}
  async get(){
    return await this.customerRepository.find()
  }

  async getById(id: number){
    const customer = await this.customerRepository.findOneBy({ id })

    if (!customer) {
      throw new NotFoundException(`Customer with ID #${id} not found`)
    }

    return customer
  }

  async create(customer: CreateCustomerDto){

    const newCustomer = this.customerRepository.create(customer)
    return await this.customerRepository.save(newCustomer)
  }

  async remove(id: number){

    const customer = await this.getById(id)
    return await this.customerRepository.remove(customer)
  }
}