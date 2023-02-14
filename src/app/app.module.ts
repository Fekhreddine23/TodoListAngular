import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './componant/home/home.component';
import { TodosComponent } from './componant/todos/todos.component';
import { FooterComponent } from './componant/footer/footer.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
