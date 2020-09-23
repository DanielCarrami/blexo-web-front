import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerSesionComponent } from './ver-sesion/ver-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import {InicioSesionComponent} from './inicio-sesion/inicio-sesion.component';
const routes: Routes = [
  {path: 'versesion', component: VerSesionComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'iniciosesion', component: InicioSesionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
