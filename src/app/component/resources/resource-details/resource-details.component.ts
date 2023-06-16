import { Component, Input, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { AttributeMetadata } from "../../models/AttributeMetadata";
import { Resource } from "../../models/Resouce";
import { ResourseService } from "src/app/services/resourse.service";
import { ResourceDetailsService } from "src/app/services/resource-details.service";
import { LanguageService } from "src/app/shared/service/language.service";
import { TranslateService } from "@ngx-translate/core";
@Component({
  selector: "app-resource-details",
  templateUrl: "./resource-details.component.html",
})
export class ResourceDetailsComponent implements OnInit {
  @Input() resource!: Resource;
  newDetails: any;
  // ResourceAttributes: AttributeMetadata[];
  ResourceType : any;
  constructor(
    public activeModal: NgbActiveModal,
    private ResourseService: ResourseService,
    private ResourceDetailsService: ResourceDetailsService,
    private languageService: LanguageService,
    public translate: TranslateService
  ) {
    this.languageService.selectedLanguage$.subscribe(lang => {
      this.translate.use(lang);
    });
  }

  getResourceDetails(id: number) {
    this.ResourceDetailsService.getResourceDetails(id).subscribe((response: any) => {
      this.newDetails = response.data;
      // console.log(this.newDetails);
      return this.newDetails;
    });
  }

  ngOnInit(): void {
    // console.log(this.ResourceType);
    // console.log(this.ResourceType.id);
    this.getResourceDetails(this.ResourceType.id);
  }

  closeModal() {
    this.activeModal.close();
  }
}
