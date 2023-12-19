import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historialEtiquetas:string[]=[];

  get historialEtiquetas(){
    return [...this._historialEtiquetas];
  }

  //aqui, introduce algo en el searchbox, y se guarda en el historial (array)
  buscarEtiqueta(etiqueta:string){
    for (let i=0;i<this._historialEtiquetas.length;i++){
      if (this._historialEtiquetas[i]===etiqueta) {
        delete(this._historialEtiquetas[i])
        i=this._historialEtiquetas.length;
      }
    }
    this._historialEtiquetas.unshift(etiqueta)
    console.log(this.historialEtiquetas)
  }
  constructor(){}
}
