import { Component, OnInit } from '@angular/core';
import { TodolistService } from '../todolist.service';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  constructor(private todoListService: TodolistService) { }

  ngOnInit() {
  }

  getTodoList() {
    return this.todoListService.getTodoList();
  }

  itemClick(item) {
    this.todoListService.toogleItemStatus(item);
  }

  delete(item) {
    this.todoListService.deleteItem(item);
  }


}
