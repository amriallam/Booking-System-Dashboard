import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { ListFaqComponent } from './list-faq/list-faq.component';


const routes: Routes = [
  { path: "", component: ListFaqComponent }
];


@NgModule({
  declarations: [
    ListFaqComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class FaqModule { }
