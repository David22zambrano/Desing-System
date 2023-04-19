import { Component, Input, OnInit } from '@angular/core';
import { Utilidades               } from '../../utilidades/utilidades';
import { ArrayAvatars             } from 'src/theme/model/modelo.model';
import { Size                     } from '../../model/modelo.model';

@Component({
  selector: 'mat-avatar',
  templateUrl: './mat-avatar.component.html',
  styleUrls: [ "./../../_theme.scss"]
})

export class MatAvatarComponent implements OnInit {
  Arrays = ['1','2','3'];
  @Input() arrayAvatar!: ArrayAvatars;
  @Input() Size!: Size;

  @Input() nombre!:string;
  resultado :string = " ";

  ngOnInit(): void {
  this.resultado = Utilidades.partirIniciales(this.nombre,2).toUpperCase();
  }
}