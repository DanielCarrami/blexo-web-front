import { Component,  Inject, OnInit } from '@angular/core';

import { CrudService, Model } from '../../../services/crud.service';

import {MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const createExperimento = gql`
  mutation createExperimento($nombre: String!, $duracion: Int!, $descripcion: String!, $sesion: Int!){
    createExperimento(nombre: $nombre, duracion: $duracion, descripcion: $descripcion, sesion: $sesion){
      id
      duracion
      nombre
      descripcion
    }
  }
  `;

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
    private apollo: Apollo,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.experimento.sesion = data.sesion_id
    console.log(this.experimento.sesion)
   }

  ngOnInit(): void {
  }

  crearExperimento(): void{
    this.apollo.mutate({
      mutation: createExperimento,
      variables: {
        nombre: this.experimento.nombre,
        descripcion: this.experimento.descripcion,
        duracion: this.experimento.duracion,
        sesion: this.experimento.sesion
      }
    }).subscribe(
      ({data}) => console.log('got data', data), 
      (error) => console.error(error)
      );
  }
}
