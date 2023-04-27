import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ColorComponent } from 'src/theme/model/modelo.model';

export default {
  title: 'Angular Material/Checkbox',
  component: CheckboxComponent,
  decorators: [
    moduleMetadata({
      imports: [MatCheckboxModule],
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
    color: {
      options: [ColorComponent.primary, ColorComponent.accent, ColorComponent.warn],
      control: { type: 'radio' },
    }
  },
} as Meta;
type Story = StoryObj<CheckboxComponent>
export const table: Story = {
  name: "mat-checkbox",
  args: {
    size: 'small',
    color: ColorComponent.accent
  }
}
