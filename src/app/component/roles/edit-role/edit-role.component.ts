import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role,Permission } from '../../models/rolePermissions';
import { RolesService } from'../../../services/roles.service';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
})
  export class EditRoleComponent implements OnInit {
    role!: Role;
    permissions!: Permission[];
   // newPermissions!:Permission[];
    resources: string[] = [
      'BookingItems',
      'ClientBookings',
      'Resources',
      'ResourceDatas',
      'ResourceMetadatas',
      'ResourceTypes',
      'Schedules',
      'ScheduleItems',
      'Services',
      'ServiceMetadatas',
      'Users',
      'Roles'
    ];
  
    constructor(
      private rolesService: RolesService,
      private route: ActivatedRoute,
      private router: Router
    ) {}
  
    ngOnInit() {
      const roleID = this.route.snapshot.paramMap.get('id');
      this.rolesService.getRolePermissionsById(roleID!).subscribe(role => {
        this.role = role.data;
        this.permissions = role.data.permissions;
      });
    }
  
    isChecked(resource: string, permission: string): boolean {
      const selectedPermission = this.permissions?.find(p => p.permissionName === `Permissions.${resource}.${permission}`);
      return selectedPermission ? selectedPermission.isSelected : false;
    }
  
    onPermissionChange(resource: string, permission: string, isChecked: boolean): void {
      const permissionName = `Permissions.${resource}.${permission}`;
      const selectedPermission = this.permissions?.find(p => p.permissionName === permissionName);
  
      if (selectedPermission) 
        selectedPermission.isSelected = isChecked
       // selectedPermission.isSelected ?? selectedPermission.isSelected = true : selectedPermission.isSelected = false;}
      // } else {
      //   this.newPermissions?.push({ permissionName: permissionName, isSelected: isChecked });
      // }
    }
  
    onSave() {
      // this.role.permissions = this.permissions;
      console.table(this.permissions)
      this.rolesService.updateRole(this.role.roleID,this.permissions).subscribe(() => {
        this.router.navigate(['/roles']);
      });
    }
  
    onCancel() {
      this.router.navigate(['/roles']);
    }
  }

