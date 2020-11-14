import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrudService, Model } from '../../../services/crud.service';
import { Proyecto } from '../../../models/proyecto';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {formatDate} from '@angular/common';

// added provider
@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss'],
  providers: [MatDialog, MatDatepickerModule]
})
export class CreateProjectComponent implements OnInit {
  prueba: any[] [];
  date = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  proyecto = {
    nombre: '',
    descripcion: '',
    fecha_inicio: this.date,
    sesiones: []
  };

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
  }

  crearProyecto(){
    console.log(this.proyecto);
    console.log(this.date);
    this.crudService.post_one(Model.PROYECTO, this.proyecto)
        .then(res => {
        this.proyecto = res.data;
        this.date;
        console.log("Funciona");
        })
        .catch(err => {
        console.log(err);
      });
  }

}
