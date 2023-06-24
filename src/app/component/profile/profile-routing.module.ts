import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from './profile/profile.component'
import { InfoComponent } from './info/info.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
const routes: Routes = [
  { path: '', component: ProfileComponent
  , children:[
  { path: 'Details', component: InfoComponent },
  { path: 'Edit', component: EditProfileComponent }
] 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
