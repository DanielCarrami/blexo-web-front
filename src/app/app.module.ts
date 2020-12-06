import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {InMemoryCache} from '@apollo/client/core';

import { GraphQLModule } from './graphql.module';
import { ProjectViewComponent } from './proyecto/project-view/project-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { CreateProjectComponent } from './proyecto/create-project/create-project.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { EditProjectComponent } from './proyecto/edit-project/edit-project.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { FlexLayoutModule } from "@angular/flex-layout";
import { VerSesionComponent } from './sesion/ver-sesion/ver-sesion.component';
import { ChartsModule } from 'ng2-charts';
import { EditarSesionComponent } from './sesion/editar-sesion/editar-sesion.component';
import { CommonModule} from '@angular/common';

import { MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { CrearSesionComponent } from './sesion/crear-sesion/crear-sesion.component';
import { InicioSesionComponent } from './login/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './login/registro/registro.component';
import { HeaderComponent } from './core/header/header.component';

import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { EditarUsuarioComponent } from './login/editar-usuario/editar-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ResultadoComponent } from './resultado/resultado.component';
import { SidenavComponent } from './core/sidenav/sidenav.component';
import { MisProyectosComponent } from './proyecto/mis-proyectos/mis-proyectos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OneProjectComponent } from './proyecto/one-project/one-project.component';
import { VerExperimentoComponent } from './experimento/ver-experimento/ver-experimento.component';
import { CrearExperimentoComponent } from './experimento/crear-experimento/crear-experimento.component';
import { EditarExperimentoComponent } from './experimento/editar-experimento/editar-experimento.component';
import { LinearGraphComponent } from './core/graficos/linear-graph/linear-graph.component';
import { RouterModule } from '@angular/router';

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
    EditarUsuarioComponent,
    ResultadoComponent,
    SidenavComponent,
    MisProyectosComponent,
    DashboardComponent,
    OneProjectComponent,
    VerExperimentoComponent,
    CrearExperimentoComponent,
    EditarExperimentoComponent,
    LinearGraphComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    RouterModule.forRoot([
      {path: '', component: InicioSesionComponent},
      {path: 'iniciosesion', component: InicioSesionComponent},
      {path: 'proyecto', component: ProjectViewComponent},
      {path: 'sesion/:id', component: VerSesionComponent},
      {path: 'registro', component: RegistroComponent},
      {path: 'mi-proyecto', component: MisProyectosComponent},
      {path: 'creacion', component: CrearSesionComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'proyecto/:id', component: OneProjectComponent},
      {path: 'experimento/:id', component: VerExperimentoComponent}
    ], {enableTracing: true}),
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
    MatMenuModule,
    MatSidenavModule,
    ReactiveFormsModule,
    ScrollingModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FlexLayoutModule,
    MatListModule,
    MatSelectModule
  ],
  entryComponents:[EditarSesionComponent, VerSesionComponent, CrearSesionComponent, EditarUsuarioComponent],
  providers: [
    MatDialogModule,
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) =>{
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'http://34.70.147.241:8000/graphql/'
          }),
        };
      },
      deps: [HttpLink]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
