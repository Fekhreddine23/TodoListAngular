import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
   
  private _baseUrl = 'http://localhost:3000/todos';

  public todos$ = new BehaviorSubject<Todo[]>([]); //tableau vide observable

  public todo$ = new BehaviorSubject<Todo>({}); //pour la methode findOne


  constructor(private _http:HttpClient) { }

/** la mission du service et ses methodes  */
  findAll(){
    return this._http.get<Todo[]>(this._baseUrl)
    .pipe(
      tap(todos => this.todos$.next(todos)),
      catchError(error => {
        console.error('Error fetching todos', error);
        return of([]);
      })
    );
  }



  /**Avec les observables */
  findById(id: string): Observable<Todo>{
   return  this._http.get<Todo>(`${this._baseUrl}/${id}`)
   .pipe(
    tap(todo => this.todo$.next(todo))
  );;      
  }

  createOne(todo : Todo): Observable<Todo> {
   return this._http.post<Todo>(this._baseUrl, todo)
   .pipe(tap( (todoCreate) => {  
    this.todos$.next( [ todoCreate, ...this.todos$.value] ) /* dans le tableau todos$ avec next() je lui passe la variable dans un nouveau tableau*/ 
   }))

  }


   /**Avec les observables */
  editOne(todo: Todo): Observable<Todo> {
    return this._http.put<Todo>(`${this._baseUrl}/${todo.id}`, todo).pipe(
      tap(updatedTodo => {
        const todos = this.todos$.value;
        const index = todos.findIndex(t => t.id === updatedTodo.id);
        if (index !== -1) {
          todos[index] = updatedTodo;
          this.todos$.next(todos);
        }
      })
    );
  }


  /**Avec les observables */
  deleteOne(id: string): Observable<Todo> {
    return this._http.delete<Todo>(`${this._baseUrl}/${id}`).pipe(
      tap(deletedTodo => {
        const todos = this.todos$.value;
        const index = todos.findIndex(t => t.id === deletedTodo.id);
        if (index !== -1) {
          todos.splice(index, 1);
          this.todos$.next(todos);
        }
      })
    );
  }

}
