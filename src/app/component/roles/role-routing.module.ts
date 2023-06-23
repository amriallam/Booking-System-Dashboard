import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListRolesComponent } from './list-roles/list-roles.component';
import { EditRoleComponent } from './edit-role/edit-role.component';


// const routes: Routes = [
//   { path: '', component: ListRolesComponent },
//   { path: 'edit/:id', component: EditRoleComponent },
// ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RoleRoutingModule { }
