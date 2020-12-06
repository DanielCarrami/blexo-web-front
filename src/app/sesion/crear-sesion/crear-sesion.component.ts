import { Component, Inject, OnInit } from '@angular/core';
import { CrudService, Model } from '../../../services/crud.service';

import {MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-crear-sesion',
  templateUrl: './crear-sesion.component.html',
  styleUrls: ['./crear-sesion.component.scss']
})
export class CrearSesionComponent implements OnInit {
 
  prueba: any[] [];
  sesionnueva = {
    nombre: '',
    descripcion: '',
    edad: 0,
    sexo: "",
    proyecto: 1
  }
  constructor(
    private crudService: CrudService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.sesionnueva.proyecto = data.project_id;
    console.log(data.project_id)
  }

  ngOnInit(): void {}

  crearsesion(){
    this.crudService.post_one(Model.SESION,this.sesionnueva)

  }

}
