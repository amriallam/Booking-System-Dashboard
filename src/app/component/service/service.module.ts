import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateServiceComponent } from './create-service/create-service.component';
import { ListServiceComponent } from './list-service/list-service.component';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FilterServiceComponent } from './filter-service/filter-service.component';
import { UpdateServiceComponent } from './update-service/update-service.component';
import { DeleteServiceComponent } from './delete-service/delete-service.component';
import { DetailsServiceComponent } from './details-service/details-service.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes : Routes =[
  {path:"", component: ListServiceComponent}
]

@NgModule({
  declarations: [
    CreateServiceComponent,
    ListServiceComponent,
    FilterServiceComponent,
    UpdateServiceComponent,
    DeleteServiceComponent,
    DetailsServiceComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class ServiceModule { }
