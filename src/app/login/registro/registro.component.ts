import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import {Router} from '@angular/router';

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
  check = false;

  constructor(
    private auth: AuthService, 
    private router: Router
  ) { }

  ngOnInit(): void {
  }

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
    this.check = this.password.value === this.confirmpassword.value ? true : false; 
    if(this.check){
      this.auth.registro('', this.name.value, this.lastname.value, this.email.value, 
        this.password.value, this.password.value).then(
        res => {
          if(res.data.email){
            this.auth.login(res.data.email, this.password.value)
              .then(res=>{
                console.log(res.data);
                if(res.data.auth_token){
                  this.auth.setSession(res.data);
                  this.router.navigate(['/proyecto']);
                }else{
                  console.log("Error por alguna extraña razón pero sobres");
                }
              });
          }else{
            console.log("EEEEERRRROOOOOOOOOOOOOOORR")
          }
        }
      ).catch(err => console.error(err));
    }
    else{console.log('Errooooooooor')}
    return this.check;
  }


  

}
