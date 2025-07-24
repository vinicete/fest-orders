import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ItemsController } from "./items.controller";
import { ItemsService } from "./items.service";

@Module({
  imports:[TypeOrmModule.forFeature()],
  controllers:[ItemsController],
  providers:[ItemsService]
})
export class ItemsModule{}