import { Controller, Get, Post, Patch, Delete, Body, Param, HttpStatus, } from '@nestjs/common';

import { TodolistService } from './todolist.service';
import { TodolistDTO } from './todolist.dto';

@Controller('todolist')
export class TodolistController {
    constructor(private todolistService: TodolistService) { }

    @Get()
    async showAllTodos() {
        return {
            statusCode: HttpStatus.OK,
            data: await this.todolistService.showAll(),
        };
    }

    @Post()
    async createTodos(@Body() data: TodolistDTO) {
        return {
            statusCode: HttpStatus.OK,
            message: 'todo added successfully',
            data: await this.todolistService.create(data),
        };
    }

    @Get(':id')
    async readTodo(@Param('id') id: number) {
        return {
            statusCode: HttpStatus.OK,
            data: await this.todolistService.read(id),
        };
    }

    @Delete(':id')
    async deleteTodo(@Param('id') id: number) {
        await this.todolistService.destroy(id);
        return {
            statusCode: HttpStatus.OK,
            message: 'Todo deleted successfully',
        };
    }
}