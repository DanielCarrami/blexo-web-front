import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
export interface DatoEdit{
  nombre: string;
  info: string;
  duracion: string;
}


@Component({
  selector: 'app-experimento-edit',
  templateUrl: './experimento-edit.component.html',
})
export class ExperimentoEditComponent{

  constructor( public dialogRef: MatDialogRef<ExperimentoEditComponent>, @Inject(MAT_DIALOG_DATA) public data: DatoEdit) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
