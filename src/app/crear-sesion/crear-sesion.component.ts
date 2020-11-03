import { Component, OnInit } from '@angular/core';
import { CrudService, Model } from '../../services/crud.service';

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
    proyecto: 5
  }
  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    
  }

  crearsesion(){
    console.log(this.sesionnueva);
    this.crudService.post_one(Model.SESION,this.sesionnueva)
        .then(res => {
        this.prueba = res.data;
        console.log("Funciona");
        })
        .catch(err => {
        console.log(err);
      });
  }

}
