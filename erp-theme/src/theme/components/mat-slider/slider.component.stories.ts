import { MatSliderModule } from '@angular/material/slider';
import { SliderComponent } from './slider.component';
import { moduleMetadata, StoryObj, Meta } from '@storybook/angular';

export default {
  title: 'Angular Material/slider',
  component: SliderComponent,
  decorators: [
    moduleMetadata({
      imports: [MatSliderModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          '`<mat-slider>` permite la selección de un valor de un rango a través del mouse, el tacto o el teclado, similar a un rango',
      },
    },
  },
  argTypes: {
    size: {
      description:
        'Los atamaños de los Slider los define su variante, la cual puede ser: `small` `medium` ',
      options: ['small', 'medium'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'small' },
      },
    },
    color: {
      table: {
        defaultValue: { summary: 'primary' },
        category: 'Color',
      },
      description:
        'Los colores de los Slider los define su variante, la cual puede ser: `primary` `secondary` `warn` `warning` `caution` `info`',
      options: ['primary', 'accent', 'warn', 'success', 'caution', 'info'],
      control: { type: 'radio' },
    },
  },
} as Meta;

type Story = StoryObj<SliderComponent>


export const configuracion: Story = {
  name: 'mat-slider',
  args: {
    size: 'small',
    color: 'primary',
  }
};
