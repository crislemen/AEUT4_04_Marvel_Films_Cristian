import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { DetallesPeliculaComponent } from './components/peliculas/detalles-pelicula/detalles-pelicula.component';
import { HttpClientModule } from '@angular/common/http';
import { MarvelComponent } from './components/marvel/marvel.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    DetallesPeliculaComponent,
    MarvelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
