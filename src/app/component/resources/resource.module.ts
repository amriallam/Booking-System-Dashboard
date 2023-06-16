import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ListResourcesComponent } from './list-resources/list-resources.component';
import { CreateResourceComponent } from './create-resource/create-resource.component';
import { ResourceDetailsComponent } from './resource-details/resource-details.component';
import { UpdateResourceComponent } from './update-resource/update-resource.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';



export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ]
})
export class ResourceModule { }
