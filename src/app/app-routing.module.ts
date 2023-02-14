import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./componant/home/home.component";
import { TodosComponent } from "./componant/todos/todos.component";


const routes: Routes = [
    {path: 'Home', component: HomeComponent},
    {path: 'todos', component: TodosComponent},
  ];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [ RouterModule ]

    
})
export class AppRoutingModule {}