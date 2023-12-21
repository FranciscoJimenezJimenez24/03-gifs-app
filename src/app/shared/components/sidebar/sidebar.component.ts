import { Gif } from './../../../gifs/interfaces/gifs.interfaces';
import { Component, Input } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';
@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifsService:GifsService,){

  }
  historialEtiquetasSideBar(){
    return this.gifsService.historialEtiquetas;
  }
  public cargarEtiqueta(etiqueta:string){
    this.gifsService.buscarEtiqueta(etiqueta)
  }
}
