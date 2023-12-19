import { Component } from '@angular/core';
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
  //public _historialEtiquetas:string[]=this.gifsService.historialEtiquetas
}
