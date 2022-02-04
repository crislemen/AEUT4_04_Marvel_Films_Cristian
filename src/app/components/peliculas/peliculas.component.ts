import { Component, Input, OnInit } from '@angular/core';
import {Pelicula} from "../../modules/pelicula";
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  peliculaSeleccionada?: Pelicula;
  public listaPeliculas:any =[];
  peliculaEditada:Pelicula = new Pelicula();

  constructor(private RestService:RestService) { }
  ngOnInit(): void {
    this.cargarDatos();
  }
  onSelect(pelicula:Pelicula):void{
    this.peliculaSeleccionada = pelicula;
  }
  public cargarDatos(){
    this.RestService.get('https://www.qando.es/docs/films.php')
    .subscribe((respuesta:any) =>{
      this.listaPeliculas = respuesta;
      console.log(this.listaPeliculas);
    })
  }
}
