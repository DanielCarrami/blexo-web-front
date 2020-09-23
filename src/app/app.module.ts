import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerSesionComponent } from './ver-sesion/ver-sesion.component';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditarSesionComponent } from './editar-sesion/editar-sesion.component';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import { CrearSesionComponent } from './crear-sesion/crear-sesion.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { HeaderComponent } from './core/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    VerSesionComponent,
    EditarSesionComponent,
    CrearSesionComponent,
    RegistroComponent,
    InicioSesionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule
  ],
  entryComponents:[EditarSesionComponent, VerSesionComponent, CrearSesionComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
