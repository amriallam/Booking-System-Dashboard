import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { CreateResourceComponent } from './resources/create-resource/create-resource.component';
import { ResourceDetailsComponent } from './resources/resource-details/resource-details.component';
import { MatPaginatorModule } from "@angular/material/paginator";
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatPaginatorModule,
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
    CreateResourceComponent,
    ResourceDetailsComponent
  ]
})
export class ComponentsModule { }
