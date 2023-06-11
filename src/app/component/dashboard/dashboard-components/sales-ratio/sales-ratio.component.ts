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
      const resultMap = new Map();
      // Iterate over the data array
      data.data.forEach((item) => {
        const { resourceType, month, totalPrice } = item;

        // If the resourceType is not already in the resultMap, add it with an empty data array
        if (!resultMap.has(resourceType)) {
          resultMap.set(resourceType, {
            name: resourceType,
            data: Array(12).fill(0),
          });
        }

        // Assign the total price to the corresponding month
        resultMap.get(resourceType).data[month - 1] = totalPrice;
      });

      // Convert the resultMap to an array of objects
      this.salesChartOptions.series = Array.from(resultMap.values());
    })
  }
}




