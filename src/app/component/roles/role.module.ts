import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { ListRolesComponent } from './list-roles/list-roles.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const routes: Routes = [
  { path: "", component: ListRolesComponent }
];


@NgModule({
  declarations: [
    ListRolesComponent
  ],
  imports: [
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
export class RoleModule { }
