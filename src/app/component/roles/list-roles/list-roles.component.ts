import { Component, OnInit } from '@angular/core';
import { Role } from '../../models/rolePermissions';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/service/language.service';
import { RolesService } from 'src/app/services/roles.service';
import { Permission } from 'src/app/component/models/rolePermissions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-roles',
  templateUrl: './list-roles.component.html',
})
export class ListRolesComponent implements OnInit  {
  
    roles?: Role[];
    newRoleName?: string;
    selectedRole?: Role;
    permissions?: Permission[];
    
  
    constructor(private rolesService: RolesService, public router:Router) { }
  
    ngOnInit(): void {
      this.getRoles();
    }
  
    getRoles(): void {
      this.rolesService.getAllRoles().subscribe(roles => {
        this.roles = roles.data;
      });
    }
  
    getRolePermissions(roleid: any): void {
      this.router.navigate(['/roles/edit', roleid]);
    }
  
    updateRole(): void {
      const rolePermissions = this.permissions?.map(p => ({
        permissionName: p.permissionName,
        isSelected: p.isSelected
      }));
      this.rolesService.updateRole(this.selectedRole!.roleID, rolePermissions!).subscribe(() => {
        // success message or other action
      });
    }
  
    addRole(): void {
      this.rolesService.createNewRole(this.newRoleName!).subscribe(() => {
        // success message or other action
        this.getRoles();
      });
    }
  
  }

