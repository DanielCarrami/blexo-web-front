import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrudService, Model } from '../../../services/crud.service';
import { FormGroup} from '@angular/forms';
import {formatDate} from '@angular/common';

// added provider
@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss'],
  providers: [MatDialog]
})
export class EditProjectComponent implements OnInit {
  editForm: FormGroup;
  date = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  id: string;
  proyecto = {
    nombre: '',
    descripcion: ''
  };


  constructor(
    private crudService: CrudService, 
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { 
      this.id = data.id;
      console.log(this.id)
    }

  ngOnInit(): void {
  }

  editarProyecto(){
    console.log(this.proyecto)
    this.crudService.update(Model.PROYECTO, this.id ,this.proyecto)
    .then(
      res => console.log(res)
    ).catch(err => console.error(err));

  }
  borrar(){
    this.crudService.delete(Model.PROYECTO, this.id);
  }

}
