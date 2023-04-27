import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { MatIconModule } from '@angular/material/icon';
import { MatListComponent } from './mat-list.component';
import { MatListModule } from '@angular/material/list';
export default {
  title: 'Angular Material/List',
  component: MatListComponent,
  decorators: [
    moduleMetadata({
      imports: [MatIconModule, MatListModule],
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
  },
} as Meta;

type Story = StoryObj<MatListComponent>

export const list: Story = {
  name: "mat-list",
  args: {
    size: 'small',
  }
}
