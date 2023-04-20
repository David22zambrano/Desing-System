import { MatIconModule } from '@angular/material/icon';
import { IconComponents } from './icon.component';
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
export default {
  title: 'Angular Material/Icon',
  component: IconComponents,
  decorators: [
    moduleMetadata({
      imports: [MatIconModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: " Un `<mat-icon>` es una pieza de elemento visual muy flexible teniendo una variante 'size' que le de tres tipos de tamañaos, asi como tiene la variante  'color' para más diversidad al utilizarlos.",
      },
    },
  },
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      table: {
        category: 'Size',
        defaultValue: { summary: 'small' },
      },
      description:
        'Los atamaños de los Iconos los define su variante, la cual puede ser: `small` `medium` `large`',
    },
    color: {
      table: {
        category: 'Color',
        defaultValue: { summary: 'primary' },
      },
      description:
        'Los colores de los Iconos los define su variante, la cual puede ser: `primary` `secondary` `warn` `warning` `caution` `info`',
      options: ['primary', 'accent', 'warn', 'success', 'caution', 'info'],
      control: { type: 'radio' },
    },
  },
} as Meta;

type Story = StoryObj<IconComponents>
export const configuracion: Story = {
  name: "mat-icon",
  args: {
    size: 'large',
    color: 'primary',
  }
};

