import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { VerSesionComponent } from './ver-sesion/ver-sesion.component';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditarSesionComponent } from './editar-sesion/editar-sesion.component';

import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';

import { CrearSesionComponent } from './crear-sesion/crear-sesion.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { HeaderComponent } from './core/header/header.component';

 //import {FormsModule} from '@angular/forms';
// import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    VerSesionComponent,
    EditarSesionComponent,
    CrearSesionComponent,
    InicioSesionComponent,
    RegistroComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormField,
    //MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule
     //FormsModule
    // MatButtonModule
  ],
  entryComponents:[EditarSesionComponent, VerSesionComponent, CrearSesionComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
