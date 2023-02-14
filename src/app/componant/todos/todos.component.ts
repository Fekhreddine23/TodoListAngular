import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  todos: Todo[] = [];
  constructor(private _todoService: TodoService){}

  ngOnInit(){ //on chargement appel findAll()
    this._todoService
    .findAll()
    .subscribe(todosReceived =>{
      this.todos = todosReceived;
    });
  }

}
