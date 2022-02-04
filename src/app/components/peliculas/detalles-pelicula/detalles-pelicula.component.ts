import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pelicula } from 'src/app/modules/pelicula';
import { RestService } from 'src/app/services/rest.service';
@Component({
  selector: 'app-detalles-pelicula',
  templateUrl: './detalles-pelicula.component.html',
  styleUrls: ['./detalles-pelicula.component.css']
})
export class DetallesPeliculaComponent implements OnInit {
  public id:any;
  public respuesta: any;

  constructor(private route:ActivatedRoute,private RestService:RestService) { }
  @Input() pelicula? : Pelicula;
  
  ngOnInit(): void {
    this.route.paramMap.subscribe( (paramMap:any) =>{
      const {params} = paramMap
      this.cargarData(params.id);
    })
  }
  cargarData(id:string){
    this.RestService.get(`https://www.qando.es/docs/films.php?id=${id}`)
    .subscribe(respuesta=>{
      this.respuesta = respuesta;
      console.log(respuesta)
    })
  }
}
