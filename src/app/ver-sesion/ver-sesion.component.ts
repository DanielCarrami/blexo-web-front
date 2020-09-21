import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { EditarSesionComponent } from '../editar-sesion/editar-sesion.component';

@Component({
  selector: 'app-ver-sesion',
  templateUrl: './ver-sesion.component.html',
  styleUrls: ['./ver-sesion.component.scss']
})
export class VerSesionComponent implements OnInit {

  descripcion = "descripcion generica"

  nombreproyecto = "Proyecto 1"

  titulo_experimento = "experimento 1"

  contenido_experimento = "salio chido"

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


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
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
