import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProjectViewComponent } from './project-view/project-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { CreateProjectComponent } from './create-project/create-project.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { EditProjectComponent } from './edit-project/edit-project.component';

import { VerSesionComponent } from './ver-sesion/ver-sesion.component';
import { ChartsModule } from 'ng2-charts';
import { EditarSesionComponent } from './editar-sesion/editar-sesion.component';

import { MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CrearSesionComponent } from './crear-sesion/crear-sesion.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { HeaderComponent } from './core/header/header.component';

import { MatMenuModule } from '@angular/material/menu';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ProjectViewComponent,
    CreateProjectComponent,
    EditProjectComponent,
    VerSesionComponent,
    EditarSesionComponent,
    CrearSesionComponent,
    InicioSesionComponent,
    RegistroComponent,
    InicioSesionComponent,
    HeaderComponent,
    EditarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    ChartsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    ReactiveFormsModule,
    ScrollingModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  entryComponents:[EditarSesionComponent, VerSesionComponent, CrearSesionComponent, EditarUsuarioComponent],
  providers: [
    MatDialogModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
