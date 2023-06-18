import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AttributeMetadata } from '../../models/AttributeMetadata';
import { ResourceTypeDetailsService } from 'src/app/services/resource-type-details.service';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/shared/service/language.service';
import { TranslateService } from '@ngx-translate/core';
import { ca } from 'date-fns/locale';
@Component({
  selector: 'app-resource-type-attribute-details',
  templateUrl: './resource-type-attribute-details.component.html',
})
export class ResourceTypeAttributeDetailsComponent implements OnInit {

  // @Input() resource!: Resource;
  ResourceType: any;
  ResourceTypeAttributes: AttributeMetadata[];
  TitleEdit: boolean;
  newDetails: any;
  constructor(public activeModal: NgbActiveModal,
    private ResourceTypeDetailsService: ResourceTypeDetailsService,
    private router: Router,
    private languageService: LanguageService,
    public translate: TranslateService
  ) {
    this.ResourceTypeAttributes = [
      // { Id: "1", AttributeName: "Name", AttributeType: "String" },
      // { Id: "2", AttributeName: "Loaction", AttributeType: "String" },
      // { Id: "3", AttributeName: "Date of Birth", AttributeType: "Date" }
    ];
    // this.ResourceType = new ResourceType("", "", "", 0, "");
    this.TitleEdit = false;

    this.languageService.selectedLanguage$.subscribe(lang => {
      this.translate.use(lang);
    });
  }

  getResourceTypeAttributes(id: number) {
    this.newDetails = [];
    try{
    this.ResourceTypeDetailsService.getResourceTypeDetails(id).subscribe((response: any) => {
      console.log(response);
      // check the response
      if (response.data) {
        this.newDetails = response.data;
        // console.log(this.newDetails);
        return this.newDetails;
      } else {
        this.newDetails = []
      }

      // this.newDetails = response.data;
      // console.log(this.newDetails);
      return this.newDetails;

      console.log(this.newDetails);
    })

    }
    catch(error){
      this.newDetails = []
      console.log(error);
    }
  }

  ngOnInit(): void {

    // console.log(ResourceType);
    // console.log(this.ResourceType);
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
