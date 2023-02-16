import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent  implements OnInit{
  
  todos$ = this._todoService.todos$;
 // todos: Todo[] = [];
  
  todo: any;
  constructor(private _todoService: TodoService){}

  ngOnInit(){
    this._todoService.findAll().subscribe()
  }

  /*ngOnInit(){ //on chargement appel findAll()
    this._todoService
    .findAll()
    .subscribe(todosReceived =>{
      this.todos = todosReceived;
    });
  }*/

  /**methode qui se declenche au click  */
  changeStateOfTodo(todo: Todo){

   todo.done = !todo.done; 
   this._todoService.editOne(todo).subscribe();

  }

  /** methode qui soumet le form */
  addTodoItem(form: NgForm) {
    if (form.valid && form.touched) {
     // this.todo.id = crypto.randomUUID;
   this._todoService.createOne(form.value).subscribe(); //connecte a l observable httpclient
   }
  }

  editTodo(todo:Todo){
    todo.isEditable = !todo.isEditable;

    if(!todo.isEditable){
      this._todoService
      .editOne(todo).subscribe();
      };
  }

  
   /** methode qui supprime un todo */
  deleteTodoItem(todo: Todo) {
    if(todo.id){
      this._todoService.deleteOne(todo.id).subscribe();
    }
    
  }
}
