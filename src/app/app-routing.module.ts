import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './home/users/users.component';
import { EmployeesComponent } from './home/employees/employees.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
        {
          path: 'users',
          component: UsersComponent
        },
        {
          path: 'employees',
          component: EmployeesComponent
        }
    ]
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
