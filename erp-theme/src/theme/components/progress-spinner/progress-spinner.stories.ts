import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { ProgressSpinnerComponent } from './progress-spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ColorComponent } from 'src/theme/model/modelo.model';

export default {
  title: 'Angular Material/Progress',
  component: ProgressSpinnerComponent,
  decorators: [
    moduleMetadata({
      imports: [MatProgressSpinnerModule],
    }),
  ],
  argTypes: {
    color: {
      table: {
        category: 'Colors',
        defaultValue: { summary: 'primary' },
      },
      options: [ColorComponent.primary, ColorComponent.accent, ColorComponent.warn, ColorComponent.info, ColorComponent.warning, ColorComponent.success],

      control: { type: 'radio' },
    },
  },
} as Meta;

type Story = StoryObj<ProgressSpinnerComponent>

export const ProgressSpinner: Story = {
  args: {
    color: ColorComponent.primary,
  }
}
