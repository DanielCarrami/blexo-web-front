import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrudService, Model } from '../../services/crud.service';
import { Proyecto } from '../../models/proyecto';

// added provider
@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss'],
  providers: [MatDialog]
})
export class CreateProjectComponent implements OnInit {
  prueba: any[] [];
  proyectonuevo = {
    nombre: '',
    descripcion: '',
    fecha_inicio: '2020-11-03',
    sesiones: []
  };
  private proyecto: Proyecto;

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.proyecto = new Proyecto("Proyecto prueba 2","Esto es otra prueba probosa", "2020-11-03", []);
  }

  crearProyecto(){
    console.log(this.proyecto)
    this.crudService.post_one(Model.PROYECTO, this.proyecto)
        .then(res => {
        this.prueba = res.data;
        console.log("Funciona");
        })
        .catch(err => {
        console.log(err);
      });
  }

}
