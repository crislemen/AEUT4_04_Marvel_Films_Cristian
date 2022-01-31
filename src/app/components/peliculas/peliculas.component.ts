import { Component, OnInit } from '@angular/core';
import {Pelicula} from "../../modules/pelicula";
import { peliculasArray } from 'src/app/modules/mock-pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  peliculasArray = peliculasArray;
  peliculaSeleccionada?: Pelicula;
  peliculaEditada:Pelicula = new Pelicula();
  //Funcion para añadir una nueva pelicula
  addPelicula(){
    this.peliculaEditada.id=this.peliculasArray.length + 1;
    this.peliculasArray.push(this.peliculaEditada);
    this.peliculaEditada = new Pelicula();
  }

  constructor() { }

  ngOnInit(): void {
  }
  onSelect(pelicula:Pelicula):void{
    this.peliculaSeleccionada = pelicula;
  }
}
