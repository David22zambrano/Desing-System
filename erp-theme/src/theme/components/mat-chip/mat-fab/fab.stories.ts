import { MatButtonModule } from '@angular/material/button';
import { FabComponent } from './fab.component';
import { moduleMetadata, StoryObj, Meta } from '@storybook/angular';
import { MatIconModule } from '@angular/material/icon';
import { ColorComponent } from 'src/theme/model/modelo.model';

export default {
  title: 'Angular Material/Fab- Button',
  component: FabComponent,
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
} as Meta<FabComponent>;

type Story = StoryObj<FabComponent>
export const configuracion: Story = {
  name: 'mat-fab',
  args: {
    size: 'small',
    color: ColorComponent.primary,
    icon: 'add',
  }
};
