import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodolistController } from './todolist.controller';
import { TodolistService } from './todolist.service';
import { TodolistEntity } from './todolist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TodolistEntity])],
  controllers: [TodolistController],
  providers: [TodolistService],
})
export class TodolistModule { }