import { Component,  Inject, OnInit } from '@angular/core';

import { CrudService, Model } from '../../../services/crud.service';

import {MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-crear-experimento',
  templateUrl: './crear-experimento.component.html',
  styleUrls: ['./crear-experimento.component.scss']
})
export class CrearExperimentoComponent implements OnInit {

  experimento = {
    nombre: "",
    descripcion: "",
    duracion: "",
    sesion: 0
  }

  constructor(
    private crudService: CrudService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.experimento.sesion = data.sesion_id
    console.log(this.experimento.sesion)
   }

  ngOnInit(): void {
  }

  crearExperimento(): void{
    this.crudService.post_one(Model.EXPERIMENTOS, this.experimento)
    .then( res => console.log(res))
    .catch( err => console.error(err));
  }
}
