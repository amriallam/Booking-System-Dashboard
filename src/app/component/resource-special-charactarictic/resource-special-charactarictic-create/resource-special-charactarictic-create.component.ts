import { Component } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators   } from '@angular/forms';
import {Resource} from '../../models/Resouce'
import {ResourceSpecialCharactaristics} from '../../models/resource-special-charactaristics'
import {ResourceSpecialCharactaristicsService} from '../../../shared/service/resource-special-charactaristics.service'
import { ResourseService } from 'src/app/services/resourse.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-resource-special-charactarictic-create',
  templateUrl: './resource-special-charactarictic-create.component.html',
  styleUrls: ['./resource-special-charactarictic-create.component.scss']
})

export class ResourceSpecialCharactaricticCreateComponent {

  totalCapacity!:number;
  availableCapacity!:number;
  resourceNames:Resource[]=[];

  RSCForm = new FormGroup({
    resourceNames: new FormControl(''),
    totalCapacity: new FormControl(0),
    availableCapacity: new FormControl(0),

  });
  constructor(public resourceSpecialCharactaristicsService: ResourceSpecialCharactaristicsService,
    public resourseService: ResourseService,
    private fb: FormBuilder,private router: Router)
 {
  this.RSCForm = this.fb.group({
    resourceNames: ['', Validators.required],
    totalCapacity: [0, [Validators.required, Validators.pattern(/^\d+$/)]],
    availableCapacity: [0, [Validators.required, Validators.pattern(/^\d+$/)]],
  });
  
 }
 get f() { return this.RSCForm.controls; }

 ngOnInit(){
    this.resourseService.getAllResources().subscribe(data=>{
      console.log(data.data);
      this.resourceNames = data.data;
    });

  } 

  onSubmit() {
    if (this.RSCForm.invalid) {
      return;
    }
    else{
      
      const totalCapacity = (this.RSCForm.value.totalCapacity);
      const availableCapacity = (this.RSCForm.value.availableCapacity);
      const resourceID = this.RSCForm.value.resourceNames; 
      console.log(resourceID+"attention")
      const newRSC =  ResourceSpecialCharactaristics.fromFormValues({
        resourceID:this.RSCForm.value.resourceNames,
        totalCapacity:this.RSCForm.value.totalCapacity,
        availableCapacity:this.RSCForm.value.availableCapacity,

      });
        console.log(newRSC);
      this.resourceSpecialCharactaristicsService.add(newRSC).subscribe(result => {
          console.log("from submit");
          console.log(result);

          this.router.navigate(['/ResourceSpecialCharacteristics']);

    });
  }
}
}
