import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './button.component';
import { moduleMetadata, StoryObj, Meta } from '@storybook/angular';
import { MatIconModule } from '@angular/material/icon';

export default {
  title: 'Angular Material/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [MatButtonModule, MatIconModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Los `<mat-button>` se utilizan principalmente en elementos de acción. Algunos ejemplos incluyen Agregar, Guardar, Eliminar y Registrarse. Cada página puede tener uno o dos botones principales. Cualquier llamada a la acción restante debe representarse como botones secundarios',
      },
    },
  },
  argTypes: {
    size: {
      table: {
        category: 'Size',
        defaultValue: { summary: 'small' },
      },
      description:
        'Los atamaños de los botones los define su variante, la cual puede ser: `small` `medium` `large`',
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    label: {
      table: {
        category: 'label',
      },
      description: 'Button',
    },
    color: {
      table: {
        defaultValue: { summary: 'primary' },
        category: 'Color',
      },
      description:
        'Los colores de los botones los define su variante, la cual puede ser: `primary` `secondary` `warn` `warning` `caution` `info`',
      options: ['primary', 'accent', 'warn', 'success', 'caution', 'info'],
      control: { type: 'radio' },
    },
  },
} as Meta<ButtonComponent>;

type Story = StoryObj<ButtonComponent>
export const configuracion: Story = {
  name: 'mat-button',
  args: {
    size: 'small',
    color: 'primary',
    label: 'Button',
  }
};
