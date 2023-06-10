import { Component } from '@angular/core';
import { ServiceService } from 'src/app/shared/service/service.service';
import { Service } from '../../models/Service';

@Component({
  selector: 'app-filter-service',
  templateUrl: './filter-service.component.html',
  styleUrls: ['./filter-service.component.scss']
})
export class FilterServiceComponent {
  searchServiceName: string = "";
  names : string []=[];
  constructor(private serviceService :ServiceService){

  }
  ngOnInit(){
    this.serviceService.getAll().subscribe((res)=>{
      res.data.forEach(element => {
        this.names.push(element.name)        
      });
    })
    
  }
}
