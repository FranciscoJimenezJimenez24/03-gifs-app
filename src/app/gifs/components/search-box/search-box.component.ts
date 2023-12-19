import { Component,ElementRef,ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  constructor(private gifsService:GifsService){}
  @ViewChild('txtInputEtiqueta')
  //este es el input del search box, todo lo que se pone ahi, se guarda en el atributo
  public inputEtiqueta!: ElementRef<HTMLInputElement>;
  //ponemos que siempre reciba el valor (!) para evitar errores

  buscarEtiqueta(){
    const nuevaEtiqueta=this.inputEtiqueta.nativeElement.value;
    this.gifsService.buscarEtiqueta(nuevaEtiqueta)
    this.inputEtiqueta.nativeElement.value=""
  }


}
