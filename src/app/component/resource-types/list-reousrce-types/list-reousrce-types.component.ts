import { Component, OnInit } from '@angular/core';
import { ResourceType } from '../../models/resource-type';

@Component({
  selector: 'app-list-reousrce-types',
  templateUrl: './list-reousrce-types.component.html',
})
export class ListReousrceTypesComponent implements OnInit {

  trow: ResourceType[] = [
    { Id: "1", Name: "Maid", Description: "Maid rental for cleaning differnet households", Quantity: 30, thumbnail: "" },
    { Id: "2", Name: "Car", Description: "Car rental for devliery service", Quantity: 20, thumbnail: "" },
    { Id: "3", Name: "Room", Description: "Hotel room rental in a hotel", Quantity: 40, thumbnail: "" },
    { Id: "4", Name: "Airplane", Description: "Airplane rental for entertainment or delivery", Quantity: 5, thumbnail: "" }
  ];

  ngOnInit(): void { }

}
