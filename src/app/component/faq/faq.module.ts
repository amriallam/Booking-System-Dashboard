import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { ListFaqComponent } from './list-faq/list-faq.component';
import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap"

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
    NgbAccordionModule
  ]
})
export class FaqModule { }
