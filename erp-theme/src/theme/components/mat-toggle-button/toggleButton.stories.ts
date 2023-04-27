import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TogglebuttonComponent } from './togglebutton.component';
import { MatIconModule } from '@angular/material/icon';

export default {
  title: 'Angular Material/Button-toggle',
  component: TogglebuttonComponent,
  decorators: [
    moduleMetadata({
      imports: [MatButtonToggleModule, MatIconModule],
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
  },
} as Meta;


type Story = StoryObj<TogglebuttonComponent>
export const configuracion: Story = {
  name: 'mat-button-toggle',
  args: {
    size: 'small',
  }
}

