import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './button.component';
import { moduleMetadata, StoryObj, Meta } from '@storybook/angular';
import { MatIconModule } from '@angular/material/icon';
import { ColorComponent } from 'src/theme/model/modelo.model';

export default {
  title: 'Angular Material/Button',
  component: ButtonComponent,
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
      options: [ColorComponent.primary, ColorComponent.accent, ColorComponent.warn, ColorComponent.info, ColorComponent.warning, ColorComponent.success],
      control: { type: 'radio' },
    },
  },
} as Meta<ButtonComponent>;

type Story = StoryObj<ButtonComponent>
export const configuracion: Story = {
  name: 'mat-button',
  args: {
    size: 'small',
    color: ColorComponent.primary,
    label: 'Button',
  }
};
