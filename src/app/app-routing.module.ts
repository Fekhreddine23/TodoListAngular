import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./componant/contact/contact.component";
import { HomeComponent } from "./componant/home/home.component";
import { TodosComponent } from "./componant/todos/todos.component";


const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'todos', component: TodosComponent},
    {path: 'contact', component: ContactComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'**', redirectTo: 'home' },
  ];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [ RouterModule ]

    
})
export class AppRoutingModule {}