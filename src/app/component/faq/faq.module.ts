import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { ListFaqComponent } from './list-faq/list-faq.component';
import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";
import { EditorModule } from '@tinymce/tinymce-angular';
import { UpdateAddFaqComponent } from './update-add-faq/update-add-faq.component';


const routes: Routes = [
  { path: "", component: ListFaqComponent},
  { path: "edit/:id", component: UpdateAddFaqComponent},
  { path: "add", component: UpdateAddFaqComponent},
];


@NgModule({
  declarations: [
    ListFaqComponent,
    UpdateAddFaqComponent
  ],
  imports: [
    EditorModule,
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),
    NgbAccordionModule
  ]
})
export class FaqModule { }
