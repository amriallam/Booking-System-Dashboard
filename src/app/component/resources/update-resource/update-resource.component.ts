import { Component } from "@angular/core";
import {
  FormGroup,
  FormControl,
  ValidationErrors,
  Validators,
} from "@angular/forms";
import { ResourseService } from "src/app/services/resourse.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { LanguageService } from "src/app/shared/service/language.service";
import { TranslateService } from "@ngx-translate/core";
@Component({
  selector: "app-update-resource",
  templateUrl: "./update-resource.component.html",
  styleUrls: ["./update-resource.component.scss"],
})
export class UpdateResourceComponent {
  resourceId = +this.route.snapshot.params.resourceId;
  resourceTypeId = +this.route.snapshot.params.id;
  constructor(
    private ResourseService: ResourseService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private languageService: LanguageService,
    public translate: TranslateService
  ) {
     this.languageService.selectedLanguage$.subscribe(lang => {
      this.translate.use(lang);
    });
  }

  updateResource = new FormGroup({
    name: new FormControl(""),
    price: new FormControl("", [
      Validators.required,
      Validators.min(0),
      Validators.max(999.99),
    ]),
  });

  priceControl = this.updateResource.get("price");

  updateResourceTypeData: any;

  updateResourceType() {
    if (!this.updateResource || this.updateResource.invalid) {
      console.log(this.updateResource.value.price);
      this.toastr.error("Please fill all the fields properly", "Error");
      if (
        this.priceControl?.hasError("min") ||
        this.priceControl?.hasError("max")
      ) {
        this.toastr.error(
          "Please fill the price within range 0 to 999.99",
          "Error"
        );
      }
    } else {
      this.updateResourceTypeData = this.updateResource.value.price;

      console.log(this.updateResourceTypeData);
      // id: this.resourceId,
      // resourceTypeId: this.resourceTypeId

      this.ResourseService.updateResource(
        this.resourceId,
        this.updateResourceTypeData
      ).subscribe((response: any) => {
        // console.log(this.updateResourceTypeData);
        // console.log(response);
        this.toastr.success("Resource updated successfully", "Success");
        setTimeout(() => {
          this.router.navigate([
            "/resourcetype",
            this.resourceTypeId,
            "resources",
          ]);
        }, 1000);
        // this.getAllResourceTypes();
      });
    }
  }

  ngOnInit(): void {
    // console.log(this.resourceId);
  }
}
