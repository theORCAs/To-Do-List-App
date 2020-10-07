import { Test, TestingModule } from '@nestjs/testing';
import { TodolistController } from './todolist.controller';
import { TodolistService } from './todolist.service';

describe('TodolistController', () => {
  let todolistController: TodolistController;

  beforeEach(async () => {
    const todolist: TestingModule = await Test.createTestingModule({
      controllers: [TodolistController],
      providers: [TodolistService],
    }).compile();

    todolistController = todolist.get<TodolistController>(TodolistController);
  });

  describe('root', () => {
    it('we should get status 201 and all the data from table', () => {
      expect(todolistController.showAllTodos()).toBe([
        {
          "title": "dolphin1",
          "descriptipn": "dolphin description",
          "priority": 1,
          "dueDate": "25/12/2020"
        }, {
          "title": "dolphin2",
          "descriptipn": "dolphin description",
          "priority": 1,
          "dueDate": "25/12/2020"
        }, {
          "title": "dolphin3",
          "descriptipn": "dolphin description",
          "priority": 1,
          "dueDate": "25/12/2020"
        }, {
          "title": "dolphin5",
          "descriptipn": "dolphin description",
          "priority": 1,
          "dueDate": "25/12/2020"
        }, {
          "title": "dolphin6",
          "descriptipn": "dolphin description",
          "priority": 1,
          "dueDate": "25/12/2020"
        }
      ]);
    });
  });

});
