import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  name = new FormControl('', [Validators.required, Validators.pattern((/^[a-zA-Z]*$/))]);
  lastname = new FormControl('', [Validators.required, Validators.pattern((/^[a-zA-Z]*$/))  ]);
  phone = new FormControl('', [Validators.required, Validators.pattern((/^((\\+91-?)|0)?[0-9]{10}$/))]);
  password = new FormControl('', [Validators.required]);
  confirmpassword = new FormControl('', [Validators.required]);


  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  hideconfirm = true;

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debes ingresar un valor';
    }

    return this.email.hasError('email') ? 'No es un correo electronico valido' : '';
  }

  getNameErrorMessage() {
       if (this.name.hasError('required')) {
        return 'Debes ingresar un nombre';
      }
  
      return this.name.hasError('pattern') ? 'No es un nombre válido' : '';
    }

    getLastNameErrorMessage() {
      if (this.lastname.hasError('required')) {
       return 'Debes ingresar un apellido';
     }
 
     return this.name.hasError('pattern') ? 'Solo se permiten letras y espacios' : '';
   }

   checkPasswords() { 
    this.password.value === this.confirmpassword.value ? 'Las contraseñas no coinciden' : '';    
}


  constructor() { }

  ngOnInit(): void {
  }

}
