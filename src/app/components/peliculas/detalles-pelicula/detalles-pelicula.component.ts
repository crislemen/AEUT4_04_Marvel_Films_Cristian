import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/modules/pelicula';
@Component({
  selector: 'app-detalles-pelicula',
  templateUrl: './detalles-pelicula.component.html',
  styleUrls: ['./detalles-pelicula.component.css']
})
export class DetallesPeliculaComponent implements OnInit {

  constructor() { }
  @Input() pelicula? : Pelicula;
  ngOnInit(): void {
  }
  editarPelicula(pelicula:Pelicula){
    this.pelicula = pelicula;
  }

}
