import { Component } from '@angular/core';
import { User, UserData, UserRole } from '../../models/User-roles';
import { UserRolesService } from 'src/app/services/user-roles.service';
import { Router } from '@angular/router';
import { RolesService } from 'src/app/services/roles.service';
import { RoleData } from '../../models/rolePermissions';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
})
export class UserRolesComponent {
  users?: UserData[];
  usersRoles?: User[];
 // userRoles?: UserRole[];
  // newRoleName?: string;
  // selectedRole?: Role;
  roles?: RoleData[];
  initialUserData?: UserData[];


  constructor(private userRolesService: UserRolesService, public router: Router, public rolesService: RolesService) { }

  ngOnInit(): void {
    this.getUseres();
    this.rolesService.getAllRoles().subscribe(_roles => {
      this.roles = _roles.data
    });
  }

  getUseres(): void {
    this.userRolesService.getAllUsers().subscribe(_users => {
      this.users = _users.data;
      this.initialUserData = _users.data; // create a copy of initial user data
      this.usersRoles = _users.data.map((e: UserData) => {
        return {
          userID: e.id, roles: e.roles.map(x => {
            return {
              roleName: x,
              isSelected: true
            }
          })
        }
      })
      console.table(this.usersRoles)
    });
  }

  isChecked(_userName: string, roleName: string): boolean {
    const user = this.users?.find(user => user.userName === _userName);
    if (!user) {
      return false; // user not found
    }
    return user.roles.some(role => role === roleName);
    // const role = user.roles.find(role => role.roleName === roleName);
    // return role ? role.isSelected : false;
  }

  onRoleChange(userId: string, _roleName: string, isChecked: boolean): void {

    const user = this.usersRoles?.find(user => user.userID === userId);
    if (!user) {
      return; // user not found
    }
      const roleIndex = user.roles.findIndex(role => role.roleName === _roleName);
    if (roleIndex > -1) {
      user.roles[roleIndex].isSelected = isChecked;
    } else {
      user.roles.push({ roleName: _roleName, isSelected: isChecked });
    }
    console.table(this.usersRoles);
    }

  onSave(_userId: string) {

    const user = this.usersRoles?.find(user => user.userID === _userId);
    if (!user) {
      return; // user not found
    }
    const rolesToAssign: UserRole[] = user.roles.filter(role => role.isSelected);
    this.userRolesService.AssignRole(_userId, rolesToAssign).subscribe(() => {
      console.log('Roles assigned successfully');
    });
  }

  onCancel() {
    if (this.initialUserData) {
      this.users = JSON.parse(JSON.stringify(this.initialUserData));
      this.usersRoles = this.initialUserData.map((e: UserData) => {
        return {
          userID: e.id, roles: e.roles.map(x => {
            return {
              roleName: x,
              isSelected: true
            }
          })
        }
      })
    }
    console.table(this.usersRoles);
  }
  }


