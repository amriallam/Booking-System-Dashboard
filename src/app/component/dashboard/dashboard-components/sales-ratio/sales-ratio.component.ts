import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexYAxis,
  ApexLegend,
  ApexXAxis,
  ApexTooltip,
  ApexTheme,
  ApexGrid
} from 'ng-apexcharts';
import { MeasuresService } from 'src/app/shared/service/measures.service';
export type salesChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: any;
  theme: ApexTheme;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  colors: string[];
  markers: any;
  grid: ApexGrid;
};

interface Result {
  [key: string]: {
    name: string;
    data: number[];
  };
}

@Component({
  selector: 'app-sales-ratio',
  templateUrl: './sales-ratio.component.html'
})
export class SalesRatioComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent = Object.create(null);
  public salesChartOptions: Partial<salesChartOptions>;
  constructor(private measureService: MeasuresService) {
    this.salesChartOptions = {
      series: [],
      chart: {
        fontFamily: 'Rubik,sans-serif',
        height: 250,
        type: 'area',
        stacked: false,
        zoom: {
          type: "x",
          enabled: true,
          autoScaleYaxis: true
        },
        toolbar: {
          autoSelected: "zoom"
        }
      },
      dataLabels: {
        enabled: true
      },
      colors: ["#137eff", "#6c757d", "#7b1aff", "#1e5eff", "#0073ff", "#00a5ff"],
      stroke: {
        curve: 'smooth',
        width: '2',
      },
      grid: {
        strokeDashArray: 3,
      },
      markers: {
        size: 3
      },
      xaxis: {
        categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      },
      tooltip: {
        theme: 'light'
      }
    };
  }

  ngOnInit(): void {
    let currentYear = new Date().getFullYear();
    const yearStart = `${currentYear}-01-01`;
    const yearEnd = `${currentYear}-12-31`;
    this.updateSeries(yearStart, yearEnd);
    this.measureService.dateSubject.subscribe((value) => {
      let fromDate = `${value.fromDate.year}-01-01}`;
      let toDate = `${value.toDate.year}-12-31`;
      this.updateSeries(fromDate, toDate);
    });
  }

  private updateSeries(yearStart: string, yearEnd: string,) {
    this.measureService.GetResourceTypesSalesPerMonth(yearStart, yearEnd).subscribe(data => {
      const result: Result = {};
      data.data.forEach(item => {
        const resourceType = item.resourceType;
        const month = item.month;
        const totalPrice = item.totalPrice;

        if (!result[resourceType]) {
          result[resourceType] = {
            name: resourceType,
            data: []
          };
        }

        while (result[resourceType].data.length < month) {
          result[resourceType].data.push(0);
        }

        result[resourceType].data.push(totalPrice);
      });
      this.salesChartOptions.series = Object.values(result);
    })
  }
}

