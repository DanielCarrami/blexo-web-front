import { Component, OnInit} from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { CrudService, Model } from '../../services/crud.service';
import { Label } from 'ng2-charts';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { EditarSesionComponent } from '../editar-sesion/editar-sesion.component';

import * as d3 from 'd3';
import * as d3Scale from 'd3';
import * as d3Shape from 'd3';
import * as d3Array from 'd3';
import * as d3Axis from 'd3';

@Component({
  selector: 'app-ver-sesion',
  templateUrl: './ver-sesion.component.html',
  styleUrls: ['./ver-sesion.component.scss']
})


export class VerSesionComponent implements OnInit {

  sesiones: any[] = [];
  
    
    public title = 'Line Chart';
    public data: any[] = [
      {date: new Date('2010-01-01'), value: 40},
      {date: new Date('2010-01-04'), value: 93},
      {date: new Date('2010-01-05'), value: 95},
      {date: new Date('2010-01-06'), value: 130},
      {date: new Date('2010-01-07'), value: 110},
      {date: new Date('2010-01-08'), value: 120},
      {date: new Date('2010-01-09'), value: 129},
      {date: new Date('2010-01-10'), value: 107},
      {date: new Date('2010-01-11'), value: 140},
    ];

    private margin = {top: 20, right: 20, bottom: 30, left: 50};
    private width: number;
    private height: number;
    private x: any;
    private y: any;
    private svg: any;
    private line: d3Shape.Line<[number, number]>;

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['2006', '2007'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  

  public barChartData: ChartDataSets[] = [
    { data: [50, 59], label: 'Exitos' },
    { data: [0, 1], label: 'No exitos' }
  ];


  constructor(
    private crudService: CrudService,
    public dialog: MatDialog
  ) { 
    this.width = 960 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
  }

  ngOnInit(): void {

    this.crudService.get_one(Model.SESION,1)
    .then(res => {
    this.sesiones = res.data;
    console.log(this.sesiones["descripcion"]);
    })
    .catch(err => {
    console.log(err);
    });

    this.sesion;



    this.buildSvg();
    this.addXandYAxis();
    this.drawLineAndPath();
  }
  sesion = {
    label: "First",
    title: this.sesiones["nombre"],
    content: this.sesiones["descripcion"] ,
    experimentos: [
      {
        title: "Experimento 1",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vestibulum ante, a pretium ante. Curabitur vulputate pharetra erat sit amet scelerisque. Ut vel lobortis ex. Proin quis mauris urna. Integer ut orci nulla. Curabitur nec arcu et enim laoreet vehicula. Aliquam sed lorem id neque malesuada lacinia. Donec non congue libero. Duis et pretium sapien, eget commodo ante. Sed consectetur quam urna, quis vehicula velit aliquet eu. Vivamus et volutpat nisl. Ut suscipit urna vitae dolor hendrerit sollicitudin. Fusce aliquam ante hendrerit justo tincidunt egestas. Duis viverra dui a arcu pharetra consequat. Nulla sollicitudin placerat libero varius elementum. Integer non maximus eros.Nam iaculis quis lorem blandit efficitur. Praesent tempor risus tellus, ut tempus enim mattis eget. Donec eleifend auctor odio, id faucibus augue posuere quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent nec purus posuere, suscipit ligula ac, bibendum lectus. Cras cursus lectus non mauris posuere efficitur. Integer consequat lacus interdum, eleifend metus eu, malesuada odio. Nullam nec vulputate leo, sit amet porttitor lacus. Donec id mattis mauris. Sed a nibh orci. Praesent arcu felis, viverra sit amet sodales non, cursus eu augue. In libero leo, pretium sed dignissim non, ornare eu sapien. Ut malesuada euismod diam nec sollicitudin. Nulla condimentum ex ex, a dignissim leo condimentum nec. Quisque ac tortor finibus, finibus enim blandit, dignissim nulla. Nullam malesuada neque scelerisque ornare eleifend. Nulla ultricies ultrices lacus ac pharetra. Maecenas facilisis lacus at volutpat bibendum. Nulla id molestie urna. Suspendisse potenti."
      },
      {
        title: "Experimento 2",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vestibulum ante, a pretium ante. Curabitur vulputate pharetra erat sit amet scelerisque. Ut vel lobortis ex. Proin quis mauris urna. Integer ut orci nulla. Curabitur nec arcu et enim laoreet vehicula. Aliquam sed lorem id neque malesuada lacinia. Donec non congue libero. Duis et pretium sapien, eget commodo ante. Sed consectetur quam urna, quis vehicula velit aliquet eu. Vivamus et volutpat nisl. Ut suscipit urna vitae dolor hendrerit sollicitudin. Fusce aliquam ante hendrerit justo tincidunt egestas. Duis viverra dui a arcu pharetra consequat. Nulla sollicitudin placerat libero varius elementum. Integer non maximus eros.Nam iaculis quis lorem blandit efficitur. Praesent tempor risus tellus, ut tempus enim mattis eget. Donec eleifend auctor odio, id faucibus augue posuere quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent nec purus posuere, suscipit ligula ac, bibendum lectus. Cras cursus lectus non mauris posuere efficitur. Integer consequat lacus interdum, eleifend metus eu, malesuada odio. Nullam nec vulputate leo, sit amet porttitor lacus. Donec id mattis mauris. Sed a nibh orci. Praesent arcu felis, viverra sit amet sodales non, cursus eu augue. In libero leo, pretium sed dignissim non, ornare eu sapien. Ut malesuada euismod diam nec sollicitudin. Nulla condimentum ex ex, a dignissim leo condimentum nec. Quisque ac tortor finibus, finibus enim blandit, dignissim nulla. Nullam malesuada neque scelerisque ornare eleifend. Nulla ultricies ultrices lacus ac pharetra. Maecenas facilisis lacus at volutpat bibendum. Nulla id molestie urna. Suspendisse potenti."
      },
      {
        title: "Experimento 3",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vestibulum ante, a pretium ante. Curabitur vulputate pharetra erat sit amet scelerisque. Ut vel lobortis ex. Proin quis mauris urna. Integer ut orci nulla. Curabitur nec arcu et enim laoreet vehicula. Aliquam sed lorem id neque malesuada lacinia. Donec non congue libero. Duis et pretium sapien, eget commodo ante. Sed consectetur quam urna, quis vehicula velit aliquet eu. Vivamus et volutpat nisl. Ut suscipit urna vitae dolor hendrerit sollicitudin. Fusce aliquam ante hendrerit justo tincidunt egestas. Duis viverra dui a arcu pharetra consequat. Nulla sollicitudin placerat libero varius elementum. Integer non maximus eros.Nam iaculis quis lorem blandit efficitur. Praesent tempor risus tellus, ut tempus enim mattis eget. Donec eleifend auctor odio, id faucibus augue posuere quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent nec purus posuere, suscipit ligula ac, bibendum lectus. Cras cursus lectus non mauris posuere efficitur. Integer consequat lacus interdum, eleifend metus eu, malesuada odio. Nullam nec vulputate leo, sit amet porttitor lacus. Donec id mattis mauris. Sed a nibh orci. Praesent arcu felis, viverra sit amet sodales non, cursus eu augue. In libero leo, pretium sed dignissim non, ornare eu sapien. Ut malesuada euismod diam nec sollicitudin. Nulla condimentum ex ex, a dignissim leo condimentum nec. Quisque ac tortor finibus, finibus enim blandit, dignissim nulla. Nullam malesuada neque scelerisque ornare eleifend. Nulla ultricies ultrices lacus ac pharetra. Maecenas facilisis lacus at volutpat bibendum. Nulla id molestie urna. Suspendisse potenti."
      }
    ]
  };

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  private buildSvg() {
    this.svg = d3.select('svg') // svg element from html
      .append('g')   // appends 'g' element for graph design
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }

  private addXandYAxis() {
    // range of data configuring
    this.x = d3Scale.scaleTime().range([0, this.width]);
    this.y = d3Scale.scaleLinear().range([this.height, 0]);
    this.x.domain(d3Array.extent(this.data, (d) => d.date ));
    this.y.domain(d3Array.extent(this.data, (d) => d.value ));
    // Configure the X Axis
    this.svg.append('g')
        .attr('transform', 'translate(0,' + this.height + ')')
        .call(d3Axis.axisBottom(this.x));
    // Configure the Y Axis
    this.svg.append('g')
        .attr('class', 'axis axis--y')
        .call(d3Axis.axisLeft(this.y));
  }

  private drawLineAndPath() {
    this.line = d3Shape.line()
        .x( (d: any) => this.x(d.date) )
        .y( (d: any) => this.y(d.value) );
    // Configuring line path
    this.svg.append('path')
        .datum(this.data)
        .attr('class', 'line')
        .attr('d', this.line);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    this.barChartData[0].data = data;
  }

  popup(){
    const dialogRef = this.dialog.open(EditarSesionComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }
  

}
