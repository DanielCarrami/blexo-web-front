import { Component, OnInit, Input  } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditProjectComponent } from '../edit-project/edit-project.component';
import { CrudService, Model } from '../../../services/crud.service';
import { CrearSesionComponent } from '../../sesion/crear-sesion/crear-sesion.component';


@Component({
  selector: 'app-one-project',
  templateUrl: './one-project.component.html',
  styleUrls: ['./one-project.component.scss']
})

export class OneProjectComponent implements OnInit {

  id: any = '';
  proyecto: any = {
    nombre: "",
    descripcion: "",
    fecha_inicio: "",
    sesiones: []
  };

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private crudService: CrudService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.crudService.get_one(Model.PROYECTO, this.id)
    .then(
      res => {
        this.proyecto=res.data
      }
    )
  }
  
  editarProyecto(): void{
    const dialogRef = this.dialog.open(EditProjectComponent, {
      width: '450px',
      data: {
        id: this.id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  crearSesion(): void{
    const dialogRef = this.dialog.open(CrearSesionComponent, {
      width: '450px',
      data: {
        project_id: this.id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
