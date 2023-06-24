import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourceSpecialCharactaricticRoutingModule } from './resource-special-charactarictic-routing.module';
import { ResourceSpecialCharactaricticEditComponent } from './resource-special-charactarictic-edit/resource-special-charactarictic-edit.component';
import { ResourceSpecialCharactaricticListComponent } from './resource-special-charactarictic-list/resource-special-charactarictic-list.component';
import { ResourceSpecialCharactaricticDeleteComponent } from './resource-special-charactarictic-delete/resource-special-charactarictic-delete.component';
import { ResourceSpecialCharactaricticCreateComponent } from './resource-special-charactarictic-create/resource-special-charactarictic-create.component';


@NgModule({
  declarations: [
    ResourceSpecialCharactaricticEditComponent,
    ResourceSpecialCharactaricticListComponent,
    ResourceSpecialCharactaricticDeleteComponent,
    ResourceSpecialCharactaricticCreateComponent
  ],
  imports: [
    CommonModule,
    ResourceSpecialCharactaricticRoutingModule
  ]
})
export class ResourceSpecialCharactaricticModule { }
