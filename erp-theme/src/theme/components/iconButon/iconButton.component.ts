import { Component, Input } from "@angular/core";

@Component({
  selector: 'Mat-fab',
  template: `<button [ngClass]="sizes" mat-icon-button><mat-icon>add</mat-icon></button>`
})
export class IconButtonComponent {
  @Input() size!: string;
  @Input() label!: string;
  @Input() color!: string;

  public get sizes(): string[] {
    return [`${this.size}`, `button-${this.color}`];
  }
}

