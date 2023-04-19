/* eslint-disable @angular-eslint/directive-selector */
import { Component, Input, OnInit } from '@angular/core';
import { Utilidades } from '../../utilidades/utilidades';
import { AvatasrModel } from 'src/theme/model/modelo.model';

@Component({
  selector: 'mat-avatar',
  templateUrl: './mat-avatar.component.html',
  styleUrls: ["./../../_theme.scss"]
})

export class MatAvatarComponent implements OnInit{;

  @Input() avatarModel!: AvatasrModel;
  @Input() size='medium';


  @Input() nombre!:string;
  resultado :string = " ";

  ngOnInit(): void {
  this.resultado = Utilidades.partirIniciales(this.nombre,2).toUpperCase();
  }
}