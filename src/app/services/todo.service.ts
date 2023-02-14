import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
   
  private _baseUrl = 'http://localhost:3000/todos';


  constructor(private _http:HttpClient) { }

/** la mission du service et ses methodes  */
  findAll(){
    return this._http.get<Todo[]>(this._baseUrl);
  }

  findById(id: string){
   return  this._http.get<Todo>(`${this._baseUrl}/${id}`);      
  }

  createOne(todo : Todo){
   return this._http.post<Todo>(this._baseUrl, todo)
  }

  editOne(id: string, todo:Todo){
    return this._http.put<Todo>(`${this._baseUrl}/${todo.id}`, todo)
  }

  deleteOne(id: string) {
    return this._http.delete(`${this._baseUrl}/${id}`);
  }

}
