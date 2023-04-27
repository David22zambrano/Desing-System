import { MatIconModule } from '@angular/material/icon';
import { IconComponents } from './icon.component';
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { ColorComponent } from 'src/theme/model/modelo.model';
export default {
  title: 'Angular Material/Icon',
  component: IconComponents,
  decorators: [
    moduleMetadata({
      imports: [MatIconModule],
    }),
  ],
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      table: {
        category: 'Size',
        defaultValue: { summary: 'small' },
      },

    },
    color: {
      table: {
        category: 'Color',
        defaultValue: { summary: 'primary' },
      },
      options: [ColorComponent.primary, ColorComponent.accent, ColorComponent.warn, ColorComponent.info, ColorComponent.warning, ColorComponent.success],

      control: { type: 'radio' },
    },
  },
} as Meta;

type Story = StoryObj<IconComponents>
export const configuracion: Story = {
  name: "mat-icon",
  args: {
    size: 'large',
    color: ColorComponent.primary,
  }
};

