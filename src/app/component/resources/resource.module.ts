import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ListResourcesComponent } from './list-resources/list-resources.component';
import { CreateResourceComponent } from './create-resource/create-resource.component';
import { ResourceDetailsComponent } from './resource-details/resource-details.component';

const routes: Routes = [
  { path: "", component: ListResourcesComponent }
];


@NgModule({
  declarations: [
    ListResourcesComponent,
    CreateResourceComponent,
    ResourceDetailsComponent
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
