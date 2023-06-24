import { Routes } from "@angular/router";

import { FullComponent } from "./layouts/full.component";
import { LoginComponent } from "./login/login.component";
import { authGuard } from "./shared/utility/auth.guard";
import { EditResourceTypeComponent } from "./component/resource-types/edit-resource-type/edit-resource-type.component";
import { ListResourcesComponent } from "./component/resources/list-resources/list-resources.component";
import { UpdateResourceComponent } from "./component/resources/update-resource/update-resource.component";
import { ResourceTypeAttributeCreateComponent } from "./component/resource-types/resource-type-attribute-create/resource-type-attribute-create.component";
import { NotfoundComponent } from "./component/notfound/notfound.component";
import { ListRolesComponent } from "./component/roles/list-roles/list-roles.component";
import { EditRoleComponent } from "./component/roles/edit-role/edit-role.component";
export const Approutes: Routes = [
  {
    path: "",
    component: FullComponent,
    canActivateChild: [authGuard],
    children: [
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full",
      },
      {
        path: "dashboard",
        loadChildren: () =>
          import("./component/dashboard/dashboard.module").then(
            (m) => m.DashboardModule
          ),
      },
      { path: 'roles', loadChildren: () => import('./component/roles/role.module').then(m => m.RoleModule) },
      // { path: '', component: ListRolesComponent },
      // { path: 'edit/:id', component: EditRoleComponent },
      {
        path: "component",
        loadChildren: () =>
          import("./component/component.module").then(
            (m) => m.ComponentsModule
          ),
      },
      {
        path: "resourcetype",
        loadChildren: () =>
          import("./component/resource-types/resource-type.module").then(
            (m) => m.ResourceTypeModule
          ),
      },
      {
        path: "editresourcetype/:id",
        component: EditResourceTypeComponent,
      },
      {
        path: "resourcetype/:id/resources",
        component: ListResourcesComponent,
      },
      {
        path: 'service',
        loadChildren: () => import('./component/service/service.module').then(m => m.ServiceModule)
      },
      {
        path: 'service/details/:id',
        loadChildren: () => import('./component/service/service.module').then(m => m.ServiceModule)
      },
      {
        path: "resources/:id/updateresource/:resourceId",
        component: UpdateResourceComponent,

      },
      {
        path: "resourcetype/:id/addAttribute",
        component: ResourceTypeAttributeCreateComponent,
      },
      {
        path: "resource",
        loadChildren: () =>
          import("./component/resources/resource.module").then(
            (m) => m.ResourceModule
          ),
      },
      {
        path: "ticket",
        loadChildren: () =>
          import("./component/ticket/ticket.module").then(
            (m) => m.TicketModule
          ),
      },
      {
        path: "role",
        loadChildren: () =>
          import("./component/roles/role.module").then((m) => m.RoleModule),
      },
      {
        path: "faq",
        loadChildren: () =>
          import("./component/faq/faq.module").then((m) => m.FaqModule),
      }, {
        path: 'schedule',
        loadChildren: () => import('./component/schedule/schedule.module').then(m => m.ScheduleModule)
      },
      { path: "profile", 
      loadChildren: () => import("./component/profile/profile.module")
      .then(m => m.ProfileModule) },
    ],
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "**",
    component: NotfoundComponent,
  },

];
