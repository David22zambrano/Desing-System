import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Utilidades } from '../../utilidades/utilidades';
import { Sizes, Variants } from '../../model/modelo.model';

@Component({
  selector: 'mat-avatar',
  templateUrl: "./avatar.component.html",
})

export class AvatarComponent implements OnInit {

  @Input() size?: Sizes
  @Input() variant?: string
  @Input() nombre!: string;
  resultado: string = " ";

  ngOnInit(): void {
    this.resultado = Utilidades.partirIniciales(this.nombre, 2).toUpperCase();
  }

  public get sizes(): string[] {
    return [`${this.size} `, ` ${this.variant}`]
  }
}
