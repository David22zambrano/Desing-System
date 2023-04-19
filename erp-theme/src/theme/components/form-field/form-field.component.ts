import { Component, Input       } from '@angular/core';
import { ModelElement, Size                   } from 'src/theme/model/modelo.model';
import { ArrayFormField         } from '../../model/modelo.model';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./../../_theme.scss']
})
export class FormFieldComponent {
  @Input() ArrayFormFields!: ModelElement;
  @Input() size!: Size;
  @Input() appearance!: 'fill' | 'outline'; 
  
  public get Appearance(): string[] { 
    return [`${this.appearance}` ];
   } 
  public get sizes(): string[] {
     return [`${this.size}`]; 
  }
}
