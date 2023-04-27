import { MatMenuComponent } from './menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'Angular Material/Menu',
  component: MatMenuComponent,
  decorators: [
    moduleMetadata({
      imports: [MatMenuModule, MatButtonModule, BrowserAnimationsModule],
    }),
  ],
  argTypes: {
    size: {
      options: ['small', 'medium'],
      control: { type: 'radio' },
      table: {
        category: 'Size',
        defaultValue: { summary: 'medium' },
      },
    },
  },
} as Meta;

type Story = StoryObj<MatMenuComponent>
export const menu: Story = {
  name: "mat-menu",
  args: {
    size: 'medium',
  }
}
