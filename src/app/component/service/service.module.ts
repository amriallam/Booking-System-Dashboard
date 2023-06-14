import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateServiceComponent } from './create-service/create-service.component';
import { ListServiceComponent } from './list-service/list-service.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UpdateServiceComponent } from './update-service/update-service.component';
import { DeleteServiceComponent } from './delete-service/delete-service.component';
import { DetailsServiceComponent } from './details-service/details-service.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ListReousrceTypesComponent} from 'src/app/component/resource-types/list-reousrce-types/list-reousrce-types.component';
import { UpdateResoucetypefroserviceComponent } from './update-resoucetypefroservice/update-resoucetypefroservice.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes : Routes =[
  {path:"", component: ListServiceComponent},
  {path:"details/:id" , component: DetailsServiceComponent}
]

@NgModule({
  declarations: [
    CreateServiceComponent,
    ListServiceComponent,
    UpdateServiceComponent,
    DeleteServiceComponent,
    DetailsServiceComponent,
    UpdateResoucetypefroserviceComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NgbModule, 
    FontAwesomeModule
  ]
})
export class ServiceModule { }
