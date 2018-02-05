import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  chartColumn: any;
  chartPie: any;
  chartOptions: any;

  constructor(public navCtrl: NavController) {

    this.chartColumn = {
      colors: ['#6AF9C4', '#FFF263', '#64E572', '#24CBE5', '#FF9655'],
      chart: {
          type: 'column'
        },
        title: {
          text: 'สรุปสถานะการทำงานทั้งหมด'
        },
        xAxis: {
          categories: ['Apples']
        },
        yAxis: {
          title: {
            text: 'จำนวนงาน'
          }
        },
        series: [{
          name: 'งานทั้งหมดที่มีคนทำ',
          data: [1]
        }, {
          name: 'งานทั้งหมดที่กำลังทำอยู่',
          data: [5]
        }, {
          name: 'งานทั้งหมดที่ทำเสร็จแล้ว',
          data: [3]
        }, {
          name: 'งานทั้งหมดที่ทำเสร็จตามเวลา',
          data: [2]
        }, {
          name: 'งานทั้งหมดที่ทำเสร็จล่าช้า',
          data: [4]
        }]
    }

    this.chartPie = {
      colors: ['#6AF9C4', '#FFF263', '#64E572', '#24CBE5', '#FF9655'],
      chart: {
        type: 'pie'
    },
    title: {
        text: 'Scrum'
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> Work<br/>'
    },
    series: [{
        name: 'Scrum',
        colorByPoint: true,
        data: [{
            name: 'To Do',
            y: 1,
            drilldown: 'To Do'
        }, {
            name: 'In Progress',
            y: 5,
            drilldown: 'In Progress'
        }, {
            name: 'Done',
            y: 3,
            drilldown: null
        }]
    }],
    drilldown: {
        series: [{
            name: 'To Do',
            id: 'To Do',
            data: [
                ['v11.0', 24.13],
                ['v8.0', 17.2],
                ['v9.0', 8.11],
                ['v10.0', 5.33],
                ['v6.0', 1.06],
                ['v7.0', 0.5]
            ]
        }, {
            name: 'In Progress',
            id: 'In Progress',
            data: [
                ['v8.0', 2.56],
                ['v7.1', 0.77],
                ['v5.1', 0.42],
                ['v5.0', 0.3],
                ['v6.1', 0.29],
                ['v7.0', 0.26],
                ['v6.2', 0.17]
            ]
        }, {
            name: 'Done',
            id: 'Done',
            data: [
                ['v12.x', 0.34],
                ['v28', 0.24],
                ['v27', 0.17],
                ['v29', 0.16]
            ]
        }]
      }
    }

    this.chartOptions = {
      colors: ['#64E572', '#FFF263', '#6AF9C4'],
      chart: {
        type: 'bar'
      },
      title: {
          text: 'สรุปการทำงานทั้งหมดของบุคลากร'
      },
      xAxis: {
          categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
      },
      yAxis: {
          min: 0,
          title: {
              text: ''
          }
      },
      legend: {
          reversed: true
      },
      plotOptions: {
          series: {
              stacking: 'normal'
          }
      },
      series: [{
          name: 'Done',
          data: [5, 3, 4, 7, 2]
      }, {
          name: 'In Progress',
          data: [2, 2, 3, 2, 1]
      }, {
          name: 'To Do',
          data: [3, 4, 4, 2, 5]
      }]
    }
  }
}
