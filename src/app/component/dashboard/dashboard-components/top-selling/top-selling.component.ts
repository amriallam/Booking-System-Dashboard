import { Component, OnInit } from '@angular/core';
import { TopSellingResource } from './TopSellingResource';
import { MeasuresService } from 'src/app/shared/service/measures.service';

@Component({
  selector: 'app-top-selling',
  templateUrl: './top-selling.component.html'
})
export class TopSellingComponent implements OnInit {

  topSelling: TopSellingResource[] = [];

  constructor(private measureService: MeasuresService) { }

  ngOnInit(): void {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());
    const formattedCurrentDate = today.toISOString().split('T')[0];
    const formattedStartOfWeek = startOfWeek.toISOString().split('T')[0];
    this.updateTopSelling(formattedStartOfWeek, formattedCurrentDate);
    this.measureService.dateSubject.subscribe((value) => {
      let fromDate = `${value.fromDate.year}-${value.fromDate.month}-${value.fromDate.day}`;
      let toDate = `${value.toDate.year}-${value.toDate.month}-${value.toDate.day}`;
      this.updateTopSelling(fromDate, toDate);
    });
  }

  updateTopSelling(formattedStartOfWeek: string, formattedCurrentDate: string) {
    this.measureService.getTop5SellingResources(formattedStartOfWeek, formattedCurrentDate).subscribe(res =>
      this.topSelling = res.data
    )
  }

}
