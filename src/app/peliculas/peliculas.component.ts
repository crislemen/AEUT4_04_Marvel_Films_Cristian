import { Component, OnInit } from '@angular/core';
import {Pelicula} from "../pelicula";
import {PELICULAS} from "../mock-peliculas";

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  peliculaSeleccionada?: Pelicula;
  peliculas=PELICULAS;
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(pelicula:Pelicula):void{
    this.peliculaSeleccionada = pelicula;
  }
}