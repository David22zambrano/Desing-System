import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { SlideToggleComponent } from './slide-toggle.component';

export default {
  title: 'Angular Material/slide-toggle',
  component: SlideToggleComponent,
  decorators: [
    moduleMetadata({
      imports: [MatSlideToggleModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          '`<mat-slide-toggle>`es un control de encendido/apagado que se puede alternar haciendo clic.',
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
        'Los atamaños de los slide-toggle los define su variante, la cual puede ser: `small` `medium` ',
      options: ['small', 'medium'],
      control: { type: 'radio' },
    },
    label: {
      table: {
        category: 'Label',
        defaultValue: { summary: 'mat-chip' },
      },
      description: 'slide-toggle` ',
    },
    color: {
      table: {
        defaultValue: { summary: 'defaul' },
        category: 'Color',
      },
      description:
        'Los colores de los slide-toggle los define su variante, la cual puede ser: `primary` `secondary` `warn` `warning` `caution` `info`',
      options: ['primary', 'accent', 'warn', 'success', 'caution', 'info'],
      control: { type: 'radio' },
    },
  },
} as Meta;

type Story = StoryObj<SlideToggleComponent>
export const configuracion: Story = {
  name: 'mat-slide-toggle',
  args: {
    size: 'small',
    label: 'slide-toggle',
    color: 'primary',
  }
}
