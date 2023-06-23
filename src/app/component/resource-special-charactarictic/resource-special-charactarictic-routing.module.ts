import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResourceSpecialCharactaricticEditComponent } from './resource-special-charactarictic-edit/resource-special-charactarictic-edit.component';
import { ResourceSpecialCharactaricticListComponent } from './resource-special-charactarictic-list/resource-special-charactarictic-list.component';
import { ResourceSpecialCharactaricticDeleteComponent } from './resource-special-charactarictic-delete/resource-special-charactarictic-delete.component';
import { ResourceSpecialCharactaricticCreateComponent } from './resource-special-charactarictic-create/resource-special-charactarictic-create.component';


const routes: Routes = [
  {path:'', component:ResourceSpecialCharactaricticListComponent},
  {path:'add' , component: ResourceSpecialCharactaricticCreateComponent},
  {path:'update/:id' , component: ResourceSpecialCharactaricticEditComponent},
  {path:"details/:id" , component: ResourceSpecialCharactaricticDeleteComponent},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourceSpecialCharactaricticRoutingModule { }
