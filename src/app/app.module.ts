import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerSesionComponent } from './ver-sesion/ver-sesion.component';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditarSesionComponent } from './editar-sesion/editar-sesion.component';


@NgModule({
  declarations: [
    AppComponent,
    VerSesionComponent,
    EditarSesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    MatDialogModule,
    BrowserAnimationsModule
    
  ],
  entryComponents:[EditarSesionComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
