import { Routes } from '@angular/router';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';

import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdnavBasicComponent } from './nav/nav.component';
import { BadgeComponent } from './badge/badge.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { ListReousrceTypesComponent } from './resource-types/list-reousrce-types/list-reousrce-types.component';
import { ListRolesComponent } from './roles/list-roles/list-roles.component';
import { ListScheduleComponent } from './schedule/list-schedule/list-schedule.component';
import { ListTicketsComponent } from './ticket/list-tickets/list-tickets.component';
import { ListFaqComponent } from './faq/list-faq/list-faq.component';


export const ComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'table',
        component: TableComponent
      },
      {
        path: 'card',
        component: CardsComponent
      },
      {
        path: 'pagination',
        component: NgbdpaginationBasicComponent
      },
      {
        path: 'badges',
        component: BadgeComponent
      },
      {
        path: 'alert',
        component: NgbdAlertBasicComponent
      },
      {
        path: 'dropdown',
        component: NgbdDropdownBasicComponent
      },
      {
        path: 'nav',
        component: NgbdnavBasicComponent
      },
      {
        path: 'buttons',
        component: ButtonsComponent
      },
      {
        path: 'resourcetype',
        component: ListReousrceTypesComponent
      },
      {
        path: 'role',
        component: ListRolesComponent
      },
      {
        path: 'schedule',
        component: ListScheduleComponent
      },
      {
        path: 'ticket',
        component: ListTicketsComponent
      },
      {
        path: 'faq',
        component: ListFaqComponent
      }
    ]
  }
];
