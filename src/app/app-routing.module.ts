import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './shared/utility/auth.guard';


export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    canActivateChild: [authGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./component/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      },
      {
        path: 'resourcetype',
        loadChildren: () => import('./component/resource-types/resource-type.module').then(m => m.ResourceTypeModule)
      },
      {
        path: 'resource',
        loadChildren: () => import('./component/resources/resource.module').then(m => m.ResourceModule)
      },
      {
        path: 'ticket',
        loadChildren: () => import('./component/ticket/ticket.module').then(m => m.TicketModule)
      },
      {
        path: 'schedule',
        loadChildren: () => import('./component/schedule/schedule.module').then(m => m.ScheduleModule)
      },
      {
        path: 'role',
        loadChildren: () => import('./component/roles/role.module').then(m => m.RoleModule)
      },
      {
        path: 'faq',
        loadChildren: () => import('./component/faq/faq.module').then(m => m.FaqModule)
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
