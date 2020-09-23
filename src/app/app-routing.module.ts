import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerSesionComponent } from './ver-sesion/ver-sesion.component';

import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import {InicioSesionComponent} from './inicio-sesion/inicio-sesion.component';
const routes: Routes = [
  {path: 'versesion', component: VerSesionComponent},
  {path: 'iniciosesion', component: InicioSesionComponent},
  {path: 'versesion', component: VerSesionComponent},
  {path: 'registro', component: RegistroComponent},
<<<<<<< HEAD
  {path: 'iniciosesion', component: InicioSesionComponent},
=======

>>>>>>> 663c62bc8a4a7fc5f2e93205d699eccff31232c6
];

@NgModule({
  imports: [RouterModule.forRoot(routes),


  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
