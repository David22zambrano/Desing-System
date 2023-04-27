import { MatButtonModule } from '@angular/material/button';
import { IconButtonComponent } from './iconButton.component';
import { moduleMetadata, StoryObj, Meta } from '@storybook/angular';
import { MatIconModule } from '@angular/material/icon';
import { ColorComponent } from 'src/theme/model/modelo.model';

export default {
  title: 'Angular Material/Icon button',
  component: IconButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [MatButtonModule, MatIconModule],
    }),
  ],
  argTypes: {
    size: {
      table: {
        category: 'Size',
        defaultValue: { summary: 'small' },
      },

      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
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
} as Meta<IconButtonComponent>;

type Story = StoryObj<IconButtonComponent>
export const configuracion: Story = {
  name: 'mat-icon-button',
  args: {
    size: 'small',
    color: ColorComponent.primary,
    icon: 'home',
  }
};
