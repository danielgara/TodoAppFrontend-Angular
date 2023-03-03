import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { TodosComponent } from './components/todos/todos.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }, 
  {
    path: 'about',
    component: AboutComponent,
  }, 
  {
    path: 'todos',
    component: TodosComponent,
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
