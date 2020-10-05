import { Component, OnInit } from '@angular/core';
//import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  // email = new FormControl('', [Validators.required, Validators.email]);
  // hide = true;

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'Debes ingresar un valor';
  //   }

  //   return this.email.hasError('email') ? 'No es un correo electronico valido' : '';
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
