import { Component, OnInit } from '@angular/core';
import { CrudService, Model } from '../../services/crud.service';

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
    this.crudService.update(Model.SESION,1,this.sesion)
    .subscribe(res => {
    console.log("confirmado")
    })
    
  }

}
