import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern((/^[a-zA-Z]*$/))]),
    lastname: new FormControl('', [Validators.required, Validators.pattern((/^[a-zA-Z]*$/))]),
   phone: new FormControl('', [Validators.required, Validators.pattern((/^((\\+91-?)|0)?[0-9]{10}$/))]),
   correo: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required]),
  confirmpassword: new FormControl('', [Validators.required])
   
    
  });
  
   hide = true;
   hideconfirm = true;

  getNameErrorMessage() {
    if (this.userForm.value.name.hasError('required')) {
     return 'Debes ingresar un nombre';
   }

   return this.userForm.value.name.hasError('pattern') ? 'No es un nombre válido' : '';
 }

 getLastNameErrorMessage() {
   if (this.userForm.value.lastname.hasError('required')) {
    return 'Debes ingresar un apellido';
  }

  return this.userForm.value.lastname.hasError('pattern') ? 'Solo se permiten letras y espacios' : '';
}

  getPhoneErrorMesage(){
    if (this.userForm.value.phone.hasError('required')) {
      return 'Debes ingresar un número de teléfono';
    }
 
    return this.userForm.value.phone.hasError('pattern') ? 'No es un número válido' : '';
  }

  getErrorMessage() {
    if (this.userForm.value.correo.hasError('required')) {
      return 'Debes ingresar un valor';
    }

    return this.userForm.value.correo.hasError('email') ? 'No es un correo electronico valido' : '';
  }


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
  }

}
