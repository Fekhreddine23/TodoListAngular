import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './componant/home/home.component';
import { TodosComponent } from './componant/todos/todos.component';
import { FooterComponent } from './componant/footer/footer.component'; 
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'todos', component: TodosComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
