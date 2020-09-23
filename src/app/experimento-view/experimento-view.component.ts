import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {DatoEdit, ExperimentoEditComponent} from './experimento-edit.component';



@Component({
  selector: 'app-experimento-view',
  templateUrl: './experimento-view.component.html',
  styleUrls: ['./experimento-view.component.scss']
})
export class ExperimentoViewComponent implements OnInit  {
  oldData: DatoEdit ={
    nombre: '',
    info: '',
    duracion: ''
  };
  newData: DatoEdit ={
    nombre: 'Experimento N',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vestibulum ante, a pretium ante. Curabitur vulputate pharetra erat sit amet scelerisque. Ut vel lobortis ex. Proin quis mauris urna. Integer ut orci nulla. Curabitur nec arcu et enim laoreet vehicula. Aliquam sed lorem id neque malesuada lacinia. Donec non congue libero. Duis et pretium sapien, eget commodo ante. Sed consectetur quam urna, quis vehicula velit aliquet eu. Vivamus et volutpat nisl. Ut suscipit urna vitae dolor hendrerit sollicitudin. Fusce aliquam ante hendrerit justo tincidunt egestas. Duis viverra dui a arcu pharetra consequat. Nulla sollicitudin placerat libero varius elementum. Integer non maximus eros Nam iaculis quis lorem blandit efficitur. Praesent tempor risus tellus, ut tempus enim mattis eget. Donec eleifend auctor odio, id faucibus augue posuere quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent nec purus posuere, suscipit ligula ac, bibendum lectus. Cras cursus lectus non mauris posuere efficitur. Integer consequat lacus interdum, eleifend metus eu, malesuada odio. Nullam nec vulputate leo, sit amet porttitor lacus. Donec id mattis mauris. Sed a nibh orci. Praesent arcu felis, viverra sit amet sodales non, cursus eu augue. In libero leo, pretium sed dignissim non, ornare eu sapien. Ut malesuada euismod diam nec sollicitudin. Nulla condimentum ex ex, a dignissim leo condimentum nec. Quisque ac tortor finibus, finibus enim blandit, dignissim nulla. Nullam malesuada neque scelerisque ornare eleifend. Nulla ultricies ultrices lacus ac pharetra. Maecenas facilisis lacus at volutpat bibendum. Nulla id molestie urna. Suspendisse potenti.',
    duracion: '3hrs'
  };

  constructor(public edit: MatDialog) {




   }
  ngOnInit(): void{

  }
  openEdit(): void {
    const dialogRef = this.edit.open(ExperimentoEditComponent, {
      width: '800px',
      height: '900px',
      data: {nombre: this.newData.nombre, info: this.newData.info, duracion: this.newData.duracion}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.oldData.nombre = this.newData.nombre;
      this.oldData.info = this.newData.info;
      this.oldData.duracion = this.newData.duracion;
      this.newData.nombre = result.nombre;
      this.newData.info = result.info;
      this.newData.duracion = result.duracion;

      console.log(`Dialog result: ${result.nombre}`);
    });

  }
}


