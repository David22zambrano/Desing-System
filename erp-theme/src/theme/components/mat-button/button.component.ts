import { Component, Input } from '@angular/core';

@Component({
  selector: 'mat-button',
  template: `<button mat-raised-button [ngClass]="sizes">{{ label }}</button>`,
})
export class ButtonComponent {
  @Input() size!: string;
  @Input() label!: string;
  @Input() color!: string;

  public get sizes(): string[] {
    return [`${this.size}`, `button-${this.color}`];
  }
}
