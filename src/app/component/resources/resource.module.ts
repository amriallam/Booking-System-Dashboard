import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ListResourcesComponent } from './list-resources/list-resources.component';
import { CreateResourceComponent } from './create-resource/create-resource.component';
import { ResourceDetailsComponent } from './resource-details/resource-details.component';
import { UpdateResourceComponent } from './update-resource/update-resource.component';

const routes: Routes = [
  { path: "", component: ListResourcesComponent }
];


@NgModule({
  declarations: [
    ListResourcesComponent,
    CreateResourceComponent,
    ResourceDetailsComponent,
    UpdateResourceComponent
  ],
  imports: [
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ResourceModule { }
