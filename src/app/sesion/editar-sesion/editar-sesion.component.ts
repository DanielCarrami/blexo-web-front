import { Component, OnInit } from '@angular/core';
import { CrudService, Model } from '../../../services/crud.service';

@Component({
  selector: 'app-editar-sesion',
  templateUrl: './editar-sesion.component.html',
  styleUrls: ['./editar-sesion.component.scss']
})
export class EditarSesionComponent implements OnInit {

  sesion = {
    nombre: "",
    descripcion:"",
    edad:20,
    sexo:"M",
    proyecto: 1
  }

  prueba: [];
  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
  }

  editarsesion(){
    console.log(this.sesion)
    this.crudService.update(Model.SESION,2,this.sesion)
    .then(res => {
    console.log("confirmado")
    })
    
  }
  borrar(){
    this.crudService.delete(Model.SESION,2)
    .then(res => {
    console.log("confirmado")
    })
  }

  errorprueba(){
    console.log("Error en forma");
  }

}
