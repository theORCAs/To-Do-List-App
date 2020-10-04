import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';

@Controller('items')
export class ItemController {
    @Get()
    findAll(): string {
        return 'Get all items'
    }
}
