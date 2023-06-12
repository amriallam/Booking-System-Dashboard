import { Component, Inject, Input, OnInit  } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceService } from 'src/app/shared/service/service.service';
import { Service } from '../../models/Service';

@Component({
  selector: 'app-details-service',
  templateUrl: './details-service.component.html',
})
export class DetailsServiceComponent implements OnInit{
  service?: Service ;
  serviceId :number =0;
  constructor(private route: ActivatedRoute,
                @Inject(ServiceService) private serviceService :ServiceService){
              this.route.params.subscribe((params: Params) => {
                this.serviceId = params['id'];
                console.log(this.serviceId)
            });
    }
  ngOnInit(){
    console.log(this.serviceId)
    if(this.serviceId != null){
      this.serviceService.getById(+this.serviceId).subscribe(res =>{
          console.log(this.service=res.data[0])

        })
    }
    else
    {
      console.log("not found resource with this id ")
    }
  }
  // reloadServiceList(){
  //   this.serviceService.getById(this.serviceId).subscribe(res =>{
  //     this.service=res.data[0]
  // })
  // }
 

}
