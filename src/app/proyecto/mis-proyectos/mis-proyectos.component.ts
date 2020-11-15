import { Component, OnInit } from '@angular/core';
import { CreateProjectComponent } from '../create-project/create-project.component';
import { MatDialog } from '@angular/material/dialog';
import { EditProjectComponent } from '../edit-project/edit-project.component';
import { CrudService, Model } from '../../../services/crud.service';
import { Router } from '@angular/router';
import { CrearSesionComponent } from '../../sesion/crear-sesion/crear-sesion.component';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-mis-proyectos',
  templateUrl: './mis-proyectos.component.html',
  styleUrls: ['./mis-proyectos.component.scss']
})
export class MisProyectosComponent implements OnInit {

  proyectos: any[] = [];

  constructor(
    public dialog: MatDialog, 
    private router: Router, 
    private crudService: CrudService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    console.log("Se logó?",this.auth.getToken());
    this.crudService.get_proyectos()
      .then(res => {
        this.proyectos = res.data.sort((a, b) => a.id < b.id? -1: 1 );
        console.log(this.proyectos);
      })
      .catch(err => {
        console.log(err);
      });
  }

  nuevoProyecto(): void{
    const dialogRef = this.dialog.open(CreateProjectComponent, {
      width: '450px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editarProyecto(): void{
    const dialogRef = this.dialog.open(EditProjectComponent, {
      width: '450px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  verSesion(): void{
    this.router.navigate(['/sesion']);
  }

  popup(){
    const dialogRef = this.dialog.open(CrearSesionComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
