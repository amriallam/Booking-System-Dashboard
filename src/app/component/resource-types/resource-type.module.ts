import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListReousrceTypesComponent } from './list-reousrce-types/list-reousrce-types.component';
import { ResourceTypeAttributeDetailsComponent } from './resource-type-attribute-details/resource-type-attribute-details.component';
import { CreateResourceTypeComponent } from './create-resource-type/create-resource-type.component';
import { ResourceTypeService } from '../../services/resource-type.service';
import { EditResourceTypeComponent } from './edit-resource-type/edit-resource-type.component';
import { ResourceTypeAttributeCreateComponent } from './resource-type-attribute-create/resource-type-attribute-create.component';
import { DeleteResourceTypeComponent } from './delete-resource-type/delete-resource-type.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';



export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


const routes: Routes = [
  { path: "", component: ListReousrceTypesComponent }
];


@NgModule({
  declarations: [
    ListReousrceTypesComponent,
    ResourceTypeAttributeDetailsComponent,
    CreateResourceTypeComponent,
    EditResourceTypeComponent,
    ResourceTypeAttributeCreateComponent,
    DeleteResourceTypeComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  exports:[ListReousrceTypesComponent]
})
export class ResourceTypeModule { }
