import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerSesionComponent } from './ver-sesion/ver-sesion.component';

const routes: Routes = [
  {path: 'versesion', component: VerSesionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
