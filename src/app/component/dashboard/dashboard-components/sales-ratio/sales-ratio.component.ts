import { Component, OnInit, ViewChild } from '@angular/core';
import { isThisSecond } from 'date-fns';
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

@Component({
  selector: 'app-sales-ratio',
  templateUrl: './sales-ratio.component.html'
})
export class SalesRatioComponent implements OnInit {
  categoriesData: number[] = [];
  seriesData: { name: string, data: number[] }[] = []
  @ViewChild("chart") chart: ChartComponent = Object.create(null);
  public salesChartOptions: Partial<salesChartOptions>;
  constructor(private measureService: MeasuresService) {
    this.salesChartOptions = {
      series: this.seriesData,
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
        categories: this.categoriesData,
      },
      tooltip: {
        theme: 'light'
      }
    };
  }

  ngOnInit(): void {
    const yearStart = `${new Date().getFullYear()}-01-01`;
    const yearEnd = `${new Date().getFullYear() + 1}-01-01`;
    this.measureService.GetResourceTypesSalesPerMonth(yearStart, yearEnd).subscribe(data => {
      console.log(data.data);
    })
  }

}
