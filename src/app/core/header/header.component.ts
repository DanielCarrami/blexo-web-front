import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditarUsuarioComponent } from 'src/app/editar-usuario/editar-usuario.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user_name = "Adolfo"
  correo = "adsoftsito@outlook.com"
  apellido = "Centeno"
  telefono = "222-354-9089"
  password="postgresql"

  constructor(public dialog: MatDialog) { }

  openDialog() {
    
    const dialogRef =  this.dialog.open(EditarUsuarioComponent,{
      data: {user_name: this.user_name, correo: this.correo, apellido: this.apellido, 
        telefono:this.telefono, password: this.password
       }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.user_name = result.name;
      this.correo = result.correo;
      this.apellido = result.lastname;
      this.telefono = result.phone;
      this.password = result.password;
    });
  } 

  ngOnInit(): void {
  }

}

