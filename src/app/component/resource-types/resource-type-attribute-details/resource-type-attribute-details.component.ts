import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AttributeMetadata } from '../../models/AttributeMetadata';
import { ResourceTypeDetailsService } from 'src/app/services/resource-type-details.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-resource-type-attribute-details',
  templateUrl: './resource-type-attribute-details.component.html',
  styleUrls: ["./resource-type-attribute-details.component.scss"]
})
export class ResourceTypeAttributeDetailsComponent implements OnInit {
  
  // @Input() resource!: Resource;
  ResourceType: any;
  ResourceTypeAttributes: AttributeMetadata[];
  TitleEdit: boolean;
  newDetails: any;
  constructor(public activeModal: NgbActiveModal,
    private ResourceTypeDetailsService: ResourceTypeDetailsService,
    private router: Router 
    ) {
    this.ResourceTypeAttributes = [
      { Id: "1", AttributeName: "Name", AttributeType: "String" },
      { Id: "2", AttributeName: "Loaction", AttributeType: "String" },
      { Id: "3", AttributeName: "Date of Birth", AttributeType: "Date" }
    ];
    // this.ResourceType = new ResourceType("", "", "", 0, "");
    this.TitleEdit = false;
  }

  getResourceTypeAttributes(id: number) {
    this.ResourceTypeDetailsService.getResourceTypeDetails(id).subscribe((response: any) => {
      // check the response
      if (response.data) {
        this.newDetails = response.data;
        console.log(this.newDetails);
        return this.newDetails;
      }else{
        this.newDetails = ['No data found']
      }

      // this.newDetails = response.data;
      // console.log(this.newDetails);
      return this.newDetails;
    })
  }

  ngOnInit(): void { 

    // console.log(ResourceType);
    console.log(this.ResourceType);
    this.getResourceTypeAttributes(this.ResourceType.id);

  }

  closeModal() {
    this.activeModal.close();
  }

  navigateToCreateResourceTypeAttribute() {
    this.router.navigate(["resourcetype", this.ResourceType.id, "addAttribute"]);
    this.closeModal();
  }

  ToggleTitleEdit() { this.TitleEdit = !this.TitleEdit; }
  SaveTitleEdit() {
    this.ToggleTitleEdit();
  }
}
