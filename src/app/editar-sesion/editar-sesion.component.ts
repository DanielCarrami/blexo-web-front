import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-editar-sesion',
  templateUrl: './editar-sesion.component.html',
  styleUrls: ['./editar-sesion.component.scss']
})
export class EditarSesionComponent implements OnInit {

  firstNameAutofilled: boolean;
  lastNameAutofilled: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  editor(){}

  clicking(){
  }

}
