import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Utilidades } from '../../utilidades/utilidades';
import { Sizes, Variants } from '../../model/modelo.model';

@Component({
  selector: 'mat-avatar',
  template: `<div [ngClass]="sizes">
  <span> {{ resultado }}</span>
</div>`,
})

export class AvatarComponent implements OnInit {

  @Input() size: Sizes = "small"
  @Input() variant: Variants = "circular"
  @Input() nombre!: string;
  resultado: string = " ";

  ngOnInit(): void {
    this.resultado = Utilidades.partirIniciales(this.nombre, 2).toUpperCase();
  }

  public get sizes(): string[] {
    return [`${this.size} `, ` ${this.variant}`]
  }
}
