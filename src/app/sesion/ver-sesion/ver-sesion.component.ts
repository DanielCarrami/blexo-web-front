import { Component, OnInit} from '@angular/core';
import { CrudService, Model } from '../../../services/crud.service';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { EditarSesionComponent } from '../editar-sesion/editar-sesion.component';
import {ResultadoComponent} from '../../resultado/resultado.component';
import { ActivatedRoute} from '@angular/router';
import { CrearExperimentoComponent } from '../../experimento/crear-experimento/crear-experimento.component';

import { Sesion } from 'src/models/sesion';

@Component({ 
  selector: 'app-ver-sesion',
  templateUrl: './ver-sesion.component.html',
  styleUrls: ['./ver-sesion.component.scss']
})


export class VerSesionComponent implements OnInit {

  sesiones: any;
  id: string;

  constructor(
    private crudService: CrudService,
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) { 
    this.sesiones = new Sesion("","",0,"",0);
  } 

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.crudService.get_one(Model.SESION, +this.id)
    .then(res => {
      this.sesiones = res.data;
      console.log(this.sesiones);
    })
    .catch(err => {
    console.log(err);
    });

    this.sesiones
  }


  popup(){
    const dialogRef = this.dialog.open(EditarSesionComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }
  
  printResult(){
    this.dialog.open(ResultadoComponent,{
      width: '475 px'
    })
  }

  crearExperimento(): void{
    const dialogRef = this.dialog.open(CrearExperimentoComponent, {
      width: '450px',
      data: {
        sesion_id: this.id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
