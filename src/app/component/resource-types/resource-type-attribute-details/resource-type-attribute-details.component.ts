import { Component, OnInit } from '@angular/core';
import { AttributeMetadata } from '../../models/AttributeMetadata';

@Component({
  selector: 'app-resource-type-attribute-details',
  templateUrl: './resource-type-attribute-details.component.html',
})
export class ResourceTypeAttributeDetailsComponent implements OnInit {

  ResourceTypeAttributes: AttributeMetadata[];

  constructor() {
    this.ResourceTypeAttributes = [];
  }

  ngOnInit(): void { }

}
