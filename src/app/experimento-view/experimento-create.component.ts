import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
export interface DatoCreate{
  nombre: string;
  info: string;
  duracion: string;
}


@Component({
  selector: 'app-experimento-edit',
  templateUrl: './experimento-edit.component.html',
})
export class ExperimentoCreateComponent{

  constructor( public dialogRef: MatDialogRef<ExperimentoCreateComponent>, @Inject(MAT_DIALOG_DATA) public data: DatoCreate) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
