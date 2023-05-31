import { Component } from '@angular/core';
import { Ticket } from 'src/app/shared/interface/ticket';


@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.scss']
})
export class ListTicketsComponent {

  tickets: Ticket[];
  constructor() {
    this.tickets = [
      { id: 2, title: "Invalid Booking Date", category: "Booking", description: "I want to reshcedule", date: new Date(), status: "Unhandled", userId: "1" },
      { id: 1, title: "Bad Packaging", category: "Shipping", description: "Something went wrong", date: new Date(), status: "Pending", userId: "2", handlerId: "1" },
      { id: 3, title: "Bad Driver", category: "Other", description: "I want to reshcedule", date: new Date(), status: "Solved", userId: "1", handlerId: "2" }
    ];
  }

}
