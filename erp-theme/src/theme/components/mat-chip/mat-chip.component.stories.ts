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
