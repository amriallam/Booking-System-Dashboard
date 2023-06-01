import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListTicketsComponent } from './list-tickets/list-tickets.component';
import { NullStringPipe } from 'src/app/shared/pipes/null-string.pipe';

const routes: Routes = [
  { path: "", component: ListTicketsComponent }
];


@NgModule({
  declarations: [
    ListTicketsComponent,
    NullStringPipe
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class TicketModule { }
