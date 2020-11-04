import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrudService, Model } from '../../services/crud.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import {formatDate} from '@angular/common';

// added provider
@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss'],
  providers: [MatDialog]
})
export class EditProjectComponent implements OnInit {
  editForm: FormGroup;
  date = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  proyecto = {
    nombre: '',
    descripcion: '',
    fecha_inicio: this.date,
    sesiones: []
  };

  constructor(private crudService: CrudService, @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  editarProyecto(){
    console.log(this.proyecto)
    this.crudService.update(Model.PROYECTO, 9 ,this.proyecto)
    .subscribe(res => {
    console.log("confirmado")
    });

  }
  borrar(){
    this.crudService.delete(Model.PROYECTO, 6)
    .subscribe(res => {
    console.log("confirmado")
    });
  }

}
