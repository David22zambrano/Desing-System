import { Component, Input } from '@angular/core';
import { ModelElement, Size } from 'src/theme/model/modelo.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./../../_theme.scss']
})
export class ButtonComponent {
  @Input() ModelElement!: ModelElement;
  @Input() size!: Size;
   
  public get sizes(): string[] {
     return [`${this.size}`]; 
  }
}
