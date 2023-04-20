import { Meta, StoryObj, moduleMetadata,  } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { MaterialModule } from '../../material.module';
import { Sizes } from '../../model/modelo.model';

export default {
  title: 'Button/buttonComponent',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
        imports: [MaterialModule]
    }),
  ],
} as Meta<ButtonComponent>;

type Story = StoryObj<ButtonComponent>; 

export const Button : Story  = {
    args: {
        ModelElement: [
           {
            texto: 'Los `<mat-button>` se utilizan principalmente en elementos de acción. Algunos ejemplos incluyen Agregar, Guardar, Eliminar y Registrarse. Cada página puede tener uno o dos botones principales. Cualquier llamada a la acción restante debe representarse como botones secundarios',
            size: 'small',
           },
           {
            size: 'medium',
           } 
        ]
    },
    argTypes:{
        size: {
            options: [ Sizes.small, Sizes.medium ],
            control: { type: 'radio' },
    }, 
    }
}

