import { Component } from '@angular/core';
import { Role } from './role';

@Component({
  selector: 'app-list-roles',
  templateUrl: './list-roles.component.html',
})
export class ListRolesComponent {

  Roles: Role[];
  constructor() {
    this.Roles = [
      { id: 1, name: "Admin" },
      { id: 2, name: "User" },
      { id: 3, name: "Assistant" }
    ];
  }


}
