import { Component, Input } from "@angular/core";
import { ColorComponent, Sizes } from "src/theme/model/modelo.model";

@Component({
  selector: 'Mat-fab',
  template: `<button [ngClass]="sizes" mat-fab><mat-icon>{{icon}}</mat-icon></button>
  <button [ngClass]="sizes" extended mat-fab>Custom<mat-icon>{{icon}}</mat-icon></button>`
})
export class FabComponent {
  @Input() size: Sizes = "small";
  @Input() icon!: string;
  @Input() color: string = ColorComponent.primary;

  public get sizes(): string[] {
    return [`${this.size}`, `mat-${this.color}`];
  }
}
