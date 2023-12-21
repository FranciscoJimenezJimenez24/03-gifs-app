import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif,SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  public listaGifs:Gif[]=[]
  private _historialEtiquetas:string[]=[];
  private apiKey:string="cfN3pXaRpMeNbpI0QOwfMRQvHslFBugY"
  private serviceUrl:string="https://api.giphy.com/v1/gifs"

  constructor(private http:HttpClient){}

  get historialEtiquetas(){
    return [...this._historialEtiquetas];
  }

  //aqui, introduce algo en el searchbox, y se guarda en el historial (array)
  buscarEtiqueta(etiqueta:string){
    const etiquetaMins=etiqueta.toLowerCase().trim()

    if (this._historialEtiquetas.includes(etiquetaMins)){
      this._historialEtiquetas= this._historialEtiquetas.filter(busqueda => busqueda !=etiquetaMins)
    }
    if (etiquetaMins.length===0){
      return;
    }
    this._historialEtiquetas.unshift(etiquetaMins);
    this._historialEtiquetas=this._historialEtiquetas.slice(0,10)

    const params=new HttpParams()
      .set('api_key',this.apiKey)
      .set('limit',10)
      .set('q',etiqueta);

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{params}).subscribe(resp=>{
      console.log(resp);
      this.listaGifs= resp.data;
    })


  }

}
