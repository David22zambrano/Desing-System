import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { SlideToggleComponent } from './slide-toggle.component';
import { ColorComponent } from 'src/theme/model/modelo.model';

export default {
  title: 'Angular Material/slide-toggle',
  component: SlideToggleComponent,
  decorators: [
    moduleMetadata({
      imports: [MatSlideToggleModule],
    }),
  ],
  argTypes: {
    size: {
      table: {
        category: 'Size',
        defaultValue: { summary: 'small' },
      },
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
      options: [ColorComponent.primary, ColorComponent.accent, ColorComponent.warn, ColorComponent.info, ColorComponent.warning, ColorComponent.success],
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
    color: ColorComponent.primary,
  }
}
