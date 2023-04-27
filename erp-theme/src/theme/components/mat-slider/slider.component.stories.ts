import { MatSliderModule } from '@angular/material/slider';
import { SliderComponent } from './slider.component';
import { moduleMetadata, StoryObj, Meta } from '@storybook/angular';
import { ColorComponent } from 'src/theme/model/modelo.model';

export default {
  title: 'Angular Material/slider',
  component: SliderComponent,
  decorators: [
    moduleMetadata({
      imports: [MatSliderModule],
    }),
  ],
  argTypes: {
    size: {
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
      options: [ColorComponent.primary, ColorComponent.accent, ColorComponent.warn, ColorComponent.info, ColorComponent.warning, ColorComponent.success],
      control: { type: 'radio' },
    },
  },
} as Meta;

type Story = StoryObj<SliderComponent>


export const configuracion: Story = {
  name: 'mat-slider',
  args: {
    size: 'small',
    color: ColorComponent.primary,
  }
};
