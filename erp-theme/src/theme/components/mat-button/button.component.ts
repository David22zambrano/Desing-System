import { Component, Input } from '@angular/core';
import { ColorComponent, Sizes } from 'src/theme/model/modelo.model';

@Component({
  selector: 'mat-button',
  template: `<button mat-raised-button [ngClass]="sizes">{{ label }}</button>`,
})
export class ButtonComponent {
  @Input() size: Sizes = "small"
  @Input() label!: string;
  @Input() color: string = ColorComponent.primary;

  public get sizes(): string[] {
    return [`${this.size}`, `button-${this.color}`];
  }
}
