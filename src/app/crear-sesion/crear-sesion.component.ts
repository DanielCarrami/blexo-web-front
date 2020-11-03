import { Component, OnInit } from '@angular/core';
import { CrudService, Model } from '../../services/crud.service';
import {Sesion} from '../../models/sesion';
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
    edad: 20,
    sexo: "M",
    proyecto: 1
  }
  private sesion:Sesion;
  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.sesion = new Sesion("Alarico Mercado","Esto es prueba",20,"M",1)
  }

  crearsesion(){
    console.log(this.sesionnueva);
    console.log(this.sesion)
    this.crudService.post_one(Model.SESION,this.sesion)
        .then(res => {
        this.prueba = res.data;
        console.log("Funciona");
        })
        .catch(err => {
        console.log(err);
      });
  }

}
