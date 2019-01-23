import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  todoItems = [{
    id: 1,
    value: 'Todo Item No.1',
    done: false
  }, {
    id: 2,
    value: 'Todo Item No.2',
    done: true
  }, {
    id: 3,
    value: 'Todo Item No.3',
    done: false
  }];

  constructor() { }

  getTodoList() {
    return this.todoItems;
  }

  addTodo(text) {
    this.todoItems.push({
      id: (new Date()).getTime(),
      value: text,
      done: false
    });
  }

  deleteItem(item) {
    this.todoItems = this.todoItems.filter(todoItem => todoItem.id !== item.id);
  }

  toogleItemStatus(item) {
    item.done = !item.done;
  }
}
