import { ToastrService } from "ngx-toastr";
import { ResourceType } from "./../../models/ResourceType";
import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ResourceDetailsComponent } from "../resource-details/resource-details.component";
import { Resource } from "../../models/Resouce";
import { ResourseService } from "src/app/services/resourse.service";
import { ActivatedRoute, Route } from "@angular/router";
import { FormGroup, FormControl, Validators , ValidationErrors } from "@angular/forms";
import { DeleteResourceComponent } from "../delete-resource/delete-resource.component";

import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/service/language.service';

@Component({
  selector: "a-pp-list-resources",
  templateUrl: "./list-resources.component.html",
})
export class ListResourcesComponent implements OnInit {
  constructor(
    private modal: NgbModal,
    private ResourseService: ResourseService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private languageService: LanguageService,
    public translate: TranslateService
  ) {
    this.languageService.selectedLanguage$.subscribe(lang => {
      this.translate.use(lang);
    });
  }


  urlResourceTypeID: any;
  resourceTypeID: any;
  createNewResourceTypeData: any;
  searchResourceType: string = "";
  Resources: Resource[] = [];
  filteredResources: Resource[] = [];
  page: number = 1;
  pageSize: number = this.Resources.length;

  newResourceType = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    price: new FormControl("", [Validators.required]),
  });

  createNewResource() {
    if (this.newResourceType.invalid) {
      this.toastr.error("Please fill all the fields", "Error");
      return;
    } else {
      this.createNewResourceTypeData = {
        name: this.newResourceType.value.name,
        price: this.newResourceType.value.price,
        resourceTypeId: this.urlResourceTypeID,
      };
      this.ResourseService.createNewResource(
        this.createNewResourceTypeData
      ).subscribe((response: any) => {
        // console.log(response);
        this.toastr.success("Resource created successfully", "Success");
        this.getAllResourceTypes();
      });
    }
  }

  getAllResourceTypes() {
    this.ResourseService.getAllResources().subscribe((response: any) => {
      this.Resources = response.data;
      // console.log(this.Resources);
      this.filterResourcesByRtID(this.resourceTypeID);
    });
  }

  filterResourcesByRtID(id: number) {
    id = +this.urlResourceTypeID;
    // console.log(id);
    // console.log(this.Resources.filter((resource) => resource.resourceTypeId === id));
    this.filteredResources = this.Resources.filter(
      (resource) => resource.resourceTypeId === id
    );
  }

  // deleteResource(id: number) {
  //   this.ResourseService.deleteResource(id).subscribe((response: any) => {
  //     alert("Resource deleted successfully");
  //     this.getAllResourceTypes();
  //   });
  // }

  openDeleteModal(resource: Resource) {
    const modelRef = this.modal.open(DeleteResourceComponent, {
      centered: true,
    });
    modelRef.componentInstance.ResourceType = resource;


  }

  ngOnInit(): void {
    this.getAllResourceTypes();
    this.route.paramMap.subscribe((params) => {
      this.urlResourceTypeID = params.get("id");
    });
    this.filterResourcesByRtID(this.resourceTypeID);
  }
  openModal(Resource: Resource) {
    const modelRef = this.modal.open(ResourceDetailsComponent, {
      centered: true,
    });
    modelRef.componentInstance.ResourceType = Resource;
    // console.log('Resource from listing');
    // console.log(Resource);
  }

  // getResourceTypes(): string[] {
  //   return Array.from(new Set(this.Resources.map((resource) => resource.ResourceType)));
  // }

  // getResources(): Resource[] {
  //   if (this.searchResourceType) {
  //     return this.Resources.filter((resource) =>
  //       resource.ResourceType.toLowerCase().includes(this.searchResourceType.toLowerCase())
  //     );
  //   } else {
  //     return this.Resources;
  //   }
  // }
}
