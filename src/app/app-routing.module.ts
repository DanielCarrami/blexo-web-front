import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerSesionComponent } from './sesion/ver-sesion/ver-sesion.component';
import { CrearSesionComponent } from './sesion/crear-sesion/crear-sesion.component';

import { InicioSesionComponent } from './login/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './login/registro/registro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectViewComponent } from './proyecto/project-view/project-view.component';
import { MisProyectosComponent } from './proyecto/mis-proyectos/mis-proyectos.component';
import { OneProjectComponent } from './proyecto/one-project/one-project.component';

const routes: Routes = [
  {path: '', component: InicioSesionComponent},
  {path: 'iniciosesion', component: InicioSesionComponent},
  {path: 'proyecto', component: ProjectViewComponent},
  {path: 'sesion', component: VerSesionComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'mi-proyecto', component: MisProyectosComponent},
  {path: 'creacion', component: CrearSesionComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'proyecto/:id', component: OneProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),


  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
