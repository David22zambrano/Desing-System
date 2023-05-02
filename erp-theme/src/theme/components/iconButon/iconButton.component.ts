import { Component, Input } from "@angular/core";
import { ColorComponent, Sizes } from "src/theme/model/modelo.model";

@Component({
  selector: 'Mat-fab',
  template: `<button [ngClass]="sizes" mat-icon-button><mat-icon>{{icon}}</mat-icon></button>`
})
export class IconButtonComponent {
  @Input() size: Sizes = "small";
  @Input() icon!: string;
  @Input() color: string = ColorComponent.primary;

  public get sizes(): string[] {
    return [`${this.size}`, `mat-${this.color}`];
  }
}

