import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { ListRolesComponent } from './list-roles/list-roles.component';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { RoleRoutingModule } from './role-routing.module';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { UserRolesComponent } from './user-roles/user-roles.component';
import { SystemRolesComponent } from './system-roles/system-roles.component';

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const routes: Routes = [
  { path: "", component: SystemRolesComponent },
  // { path: 'edit/:id', component: EditRoleComponent },
];

@NgModule({
  declarations: [
    ListRolesComponent,
    EditRoleComponent,
    UserRolesComponent,
    SystemRolesComponent
  ],
  imports: [
    FormsModule ,
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    RoleRoutingModule
  ]
})
export class RoleModule { }
