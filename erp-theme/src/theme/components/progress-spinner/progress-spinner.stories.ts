import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { ProgressSpinnerComponent } from './progress-spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

export default {
  title: 'Angular Material/Progress',
  component: ProgressSpinnerComponent,
  decorators: [
    moduleMetadata({
      imports: [MatProgressSpinnerModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          '`<mat-progress-spinner>` y `<mat-spinner>` son indicadores circulares de progreso y actividad.',
      },
    },
  },
  argTypes: {
    color: {
      table: {
        category: 'Colors',
        defaultValue: { summary: 'primary' },
      },
      options: ['primary', 'accent', 'warn', 'success', 'caution', 'info'],
      control: { type: 'radio' },
      description:
        'El color de un progress-spinner puede cambiarse utilizando la propiedad "color". Por defecto, los progress-spinner utilizan el color "primary" del tema. Este puede cambiarse a "accent", "warn", "success", "caution" o "info"',
    },
  },
} as Meta;

type Story = StoryObj<ProgressSpinnerComponent>

export const ProgressSpinner: Story = {
  args: {
    color: 'primary',
  }
}
