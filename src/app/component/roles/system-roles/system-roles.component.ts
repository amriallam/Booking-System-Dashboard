import { Component } from '@angular/core';

@Component({
  selector: 'app-system-roles',
  templateUrl: './system-roles.component.html',
})
export class SystemRolesComponent {
  showUserRoles:boolean=false;

  switchTabs(flag:boolean)
  {
    this.showUserRoles = flag;
  }
}
