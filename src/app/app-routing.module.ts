import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarvelComponent } from './components/marvel/marvel.component';
import { DetallesPeliculaComponent } from './components/peliculas/detalles-pelicula/detalles-pelicula.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';

const routes: Routes = [
  {
    path:'',
    component:PeliculasComponent
  },
  {
    path:'post/:id',
    component:DetallesPeliculaComponent
  },
  {
    path:'marvel',
    component:MarvelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
