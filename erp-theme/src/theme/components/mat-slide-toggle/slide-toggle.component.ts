import { Component, Input } from '@angular/core';

@Component({
  selector: 'Mat-slide-toggle',
  template: `<mat-slide-toggle [ngClass]="sizes">{{
    label
  }}</mat-slide-toggle> `,
})
export class SlideToggleComponent {
  @Input() size!: string;
  @Input() label!: string;
  @Input() color!: string;

  public get sizes(): string[] {
    return [`${this.size}`, `slide-${this.color}`];
  }
}
