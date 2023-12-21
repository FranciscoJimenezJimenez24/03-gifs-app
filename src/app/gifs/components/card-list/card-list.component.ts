import { Gif } from './../../interfaces/gifs.interfaces';
import { Component, ElementRef, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  @Input()
  public listaGifs:Gif[]=[]



}
