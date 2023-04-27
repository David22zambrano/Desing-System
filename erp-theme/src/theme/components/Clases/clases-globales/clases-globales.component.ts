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
    return [ `${this.text}`, `${this.cursor}`,
             `${this.opacity}`, `${this.display}`,
             `${this.position}`, `${this.shadow}`
            ];
  }
}
