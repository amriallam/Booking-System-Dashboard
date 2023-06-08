import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListReousrceTypesComponent } from './list-reousrce-types/list-reousrce-types.component';
import { ResourceTypeAttributeDetailsComponent } from './resource-type-attribute-details/resource-type-attribute-details.component';
import { CreateResourceTypeComponent } from './create-resource-type/create-resource-type.component';

const routes: Routes = [
  { path: "", component: ListReousrceTypesComponent }
];


@NgModule({
  declarations: [
    ListReousrceTypesComponent,
    ResourceTypeAttributeDetailsComponent,
    CreateResourceTypeComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ResourceTypeModule { }
