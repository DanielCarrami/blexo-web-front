import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditarUsuarioComponent } from 'src/app/editar-usuario/editar-usuario.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user_name = "Adolfo"
  correo = "adsoftsito@outlook.com"


  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(EditarUsuarioComponent);  
  } 

  ngOnInit(): void {
  }

}

