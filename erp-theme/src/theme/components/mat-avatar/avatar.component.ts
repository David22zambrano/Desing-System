import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Sizes, Variants } from '../../model/modelo.model';
import { Utilidades } from '../../utilidades/utilidades';

@Component({
  selector: 'mat-avatar',
  templateUrl: "./avatar.component.html",

})

export class AvatarComponent implements OnInit {
  constructor(private el: ElementRef<HTMLElement>) { }

  @Input() size!: Sizes
  @Input() variant!: Variants
  @Input() nombre!: string;
  @Input() resultado: string = " ";


  ngOnInit(): void {
    this.el.nativeElement.classList.add(`${this.size}` || `${this.variant}`);
    this.resultado = Utilidades.partirIniciales(this.nombre, 2).toUpperCase();
  }
  public get sizes(): string[] {
    return [`${this.size}`, `${this.variant}`]
  }


}
