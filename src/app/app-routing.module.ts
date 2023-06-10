import { Routes } from "@angular/router";

import { FullComponent } from "./layouts/full.component";
import { LoginComponent } from "./login/login.component";
import { authGuard } from "./shared/utility/auth.guard";
import { EditResourceTypeComponent } from "./component/resource-types/edit-resource-type/edit-resource-type.component";
import { ListResourcesComponent } from "./component/resources/list-resources/list-resources.component";
import { UpdateResourceComponent } from "./component/resources/update-resource/update-resource.component";
import { Component } from "@angular/core";
import {ResourceTypeAttributeCreateComponent} from "./component/resource-types/resource-type-attribute-create/resource-type-attribute-create.component";

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
        path: "resources/:id/updateresource/:resourceId",
        component: UpdateResourceComponent,
      
      },
      {
        path:"resourcetype/:id/addAttribute",
        component: ResourceTypeAttributeCreateComponent,
      }
      ,
      
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
        path: "schedule",
        loadChildren: () =>
          import("./component/schedule/schedule.module").then(
            (m) => m.ScheduleModule
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
      },
    ],
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "**",
    redirectTo: "",
  },
];
