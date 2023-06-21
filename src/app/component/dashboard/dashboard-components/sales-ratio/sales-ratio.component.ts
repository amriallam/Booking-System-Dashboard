import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip
} from 'ng-apexcharts';
import { LanguageService } from 'src/app/shared/service/language.service';
import { MeasuresService } from 'src/app/shared/service/measures.service';
export type salesChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  stroke: ApexStroke;
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
  @ViewChild("chart") chart: ChartComponent | any;
  public salesChartOptions: salesChartOptions;
  constructor(private measureService: MeasuresService,
              private languageService: LanguageService,
              public translate: TranslateService) {

    this.languageService.selectedLanguage$.subscribe(lang => {
      this.translate.use(lang);
    });
    
    this.salesChartOptions = {
      series: [],
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "10%",
        }
      },
      dataLabels: {
        enabled: true,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [],
        title: {
          text: "Month"
        }
      },
      yaxis: {
        title: {
          text: "Money Earned ( L.E )"
        }
      },
      fill: {
        opacity: 1
      },
    }
  }

  ngOnInit() {
    this.measureService.dateSubject.subscribe((value) => {
      this.updateSeries(value.fromDate, value.toDate);
    });
  }

  private updateSeries(yearStart: string, yearEnd: string,) {
    this.measureService.GetResourceTypesSalesPerMonth(yearStart, yearEnd).subscribe(data => {
      // Setting Category Date ( X Axix Data )
      let mappedCategory = new Set();

      // Iterating through unique months in data
      data.data.forEach(item => mappedCategory.add(new Date(2000, item.month).toLocaleString('default', { month: 'long' })));
      // Setting chart X-Axis
      this.salesChartOptions.xaxis!.categories = Array.from(mappedCategory)

      // ----------------------------------------------------------------

      // Setting Data Series
      const resultMap = new Map();

      // Iterate over the data array
      data.data.forEach((item) => {
        const { resourceType, month, totalPrice } = item;
        // If the resourceType is not already in the resultMap, add it with an empty data array
        if (!resultMap.has(resourceType)) {
          resultMap.set(resourceType, {
            name: resourceType,
            data: Array(Array.from(mappedCategory).length).fill(0),
          });
        }

        // Assign the total price to the corresponding month
        resultMap.get(resourceType).data[month - 1] = totalPrice;
      });

      // Convert the resultMap to an chart series array
      this.salesChartOptions.series = Array.from(resultMap.values());
    })
  }
}




