import { LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule, DateAdapter, MOMENT } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SchedulerModule } from 'angular-calendar-scheduler';

import { ComponentsRoutes } from './component.routing';

import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';
import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdnavBasicComponent } from './nav/nav.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';
import { TableComponent } from "./table/table.component";
import { ListReousrceTypesComponent } from './resource-types/list-reousrce-types/list-reousrce-types.component';
import { ResourceTypeAttributeDetailsComponent } from './resource-types/resource-type-attribute-details/resource-type-attribute-details.component';
import { ListResourcesComponent } from './resources/list-resources/list-resources.component';
import { CreateResourceTypeComponent } from './resource-types/create-resource-type/create-resource-type.component';
import { ListRolesComponent } from './roles/list-roles/list-roles.component';
import { ListScheduleComponent } from './schedule/list-schedule/list-schedule.component';

import * as moment from 'moment';
import { AppService } from '../services/app.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    SchedulerModule.forRoot({ locale: 'en', headerDateFormat: 'daysRange', logEnabled: true }),
  ],
  declarations: [
    NgbdpaginationBasicComponent,
    NgbdAlertBasicComponent,
    NgbdDropdownBasicComponent,
    NgbdnavBasicComponent,
    ButtonsComponent,
    CardsComponent,
    TableComponent,
    ListReousrceTypesComponent,
    ResourceTypeAttributeDetailsComponent,
    ListResourcesComponent,
    CreateResourceTypeComponent,
    ListRolesComponent,
    ListScheduleComponent
  ],
  providers: [
    AppService,
    { provide: LOCALE_ID, useValue: 'en-US' },
    { provide: MOMENT, useValue: moment }
  ],
})
export class ComponentsModule { }
