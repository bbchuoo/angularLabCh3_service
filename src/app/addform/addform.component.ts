import { Component, OnInit } from '@angular/core';
import { TodolistService } from '../todolist.service';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent implements OnInit {

  placeholderText = '請輸入代辦事項';
  todoText = '';

  constructor(private todoListService: TodolistService) { }

  ngOnInit() {
  }

  addTodo($event: MouseEvent) {
    this.todoListService.addTodo(this.todoText);
  }
}
