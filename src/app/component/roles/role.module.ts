import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { ListRolesComponent } from './list-roles/list-roles.component';


const routes: Routes = [
  { path: "", component: ListRolesComponent }
];


@NgModule({
  declarations: [
    ListRolesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class RoleModule { }
