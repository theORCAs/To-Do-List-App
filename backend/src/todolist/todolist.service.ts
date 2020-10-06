import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TodolistEntity } from './todolist.entity';
import { TodolistDTO } from './todolist.dto';

@Injectable()
export class TodolistService {
    constructor(
        @InjectRepository(TodolistEntity)
        private todolistRepository: Repository<TodolistDTO>,
    ) { }

    async showAll() {
        return await this.todolistRepository.find();
    }

    async create(data: TodolistDTO) {
        const user = this.todolistRepository.create(data);
        await this.todolistRepository.save(data);
        return user;
    }

    async read(id: number) {
        return await this.todolistRepository.findOne({ where: { id: id } });
    }

    async update(id: number, data: Partial<TodolistDTO>) {
        await this.todolistRepository.update({ id }, data);
        return await this.todolistRepository.findOne({ id });
    }

    async destroy(id: number) {
        await this.todolistRepository.delete({ id });
        return { deleted: true };
    }
}