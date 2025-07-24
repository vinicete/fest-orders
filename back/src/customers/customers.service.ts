import { Injectable } from "@nestjs/common";

@Injectable()
export class CustomersService{
  
  get(){
    return 'todos os customerss'
  }
}