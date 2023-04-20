import { Component, Input } from '@angular/core';

@Component({
  selector: 'clases-globales',
  templateUrl: './clases-globales.component.html',
  styleUrls: ['../../../stylesStorybook/_clases.scss'],
})
export class ClasesGlobalesComponent {
  @Input() text!: string;
  @Input() cursor!: string;
  @Input() opacity!: string;
  @Input() display!: string;
  @Input() position!: string;
  @Input() shadow!: string;

  public get sizes(): string[] {
    return [
      `sizes--${this.text}`, `sizes--${this.cursor}`,
      `sizes--${this.opacity}`, `sizes--${this.display}`,
      `sizes--${this.position}` ,`sizes--${this.shadow}`
    ];
  }
}
