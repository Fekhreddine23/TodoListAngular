import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
   
  private _baseUrl = 'http://localhost:3000/todos';

  public todos$ = new BehaviorSubject<Todo[]>([]); //tableau vide observable


  constructor(private _http:HttpClient) { }

/** la mission du service et ses methodes  */
  findAll(){
    return this._http.get<Todo[]>(this._baseUrl);
  }

  findById(id: string): Observable<Todo>{
   return  this._http.get<Todo>(`${this._baseUrl}/${id}`);      
  }

  createOne(todo : Todo): Observable<Todo> {
   return this._http.post<Todo>(this._baseUrl, todo)
  }

  editOne( todo:Todo): Observable<Todo> {
    return this._http.put<Todo>(`${this._baseUrl}/${todo.id}`, todo)
  }

  deleteOne(id: string): Observable<Todo> {
    return this._http.delete(`${this._baseUrl}/${id}`);
  }

}
