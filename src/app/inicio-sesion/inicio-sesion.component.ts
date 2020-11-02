import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit {

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  user = {
    email: "",
    clave: ""
  }


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debes ingresar un valor';
    }

    return this.email.hasError('email') ? 'No es un correo electronico valido' : '';
  }

  constructor(private router: Router) { }

  login(){
    console.log(
      "Email: " + this.user.email.toString(),
      "\nClave: " + this.user.clave.toString()
    );
    this.router.navigate(['/proyecto']);
  }

  registro(){
    this.router.navigate(['/registro']);
  }

  ngOnInit(): void {
    
  }

}
