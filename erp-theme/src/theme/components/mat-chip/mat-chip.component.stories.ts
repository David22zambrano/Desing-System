import { MatChipsModule } from '@angular/material/chips';
import { MatChipComponent } from './mat-chip.component';
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';

export default {
  title: 'Angular Material/Chip',
  component: MatChipComponent,
  decorators: [
    moduleMetadata({
      imports: [MatChipsModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Los `mat-chip` permiten a los usuarios ver información, hacer selecciones, filtrar contenido e ingresar datos, manejando vairantes `size` como para manipular el tamaño y una varainte `color` que nos permitira tener diversos estilos de un chip  .',
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
        'Los atamaños de los chips los define su variante, la cual puede ser: `small` `medium` ',
      options: ['small', 'medium'],
      control: { type: 'radio' },
    },
    label: {
      table: {
        category: 'Label',
        defaultValue: { summary: 'mat-chip' },
      },
      description:
        'Los atamaños de los chips los define su variante, la cual puede ser: `small` `medium` ',
    },
  },
} as Meta;

type Story = StoryObj<MatChipComponent>

export const configuracion: Story = {
  args: {
    size: 'small',
    label: 'mat-Chip',
  }
}
