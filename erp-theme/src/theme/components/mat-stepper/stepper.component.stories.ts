import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { StepperComponent } from './stepper.component';
import { ColorComponent } from 'src/theme/model/modelo.model';
export default {
  title: 'Angular Material/Stepper',
  component: StepperComponent,
  decorators: [
    moduleMetadata({
      imports: [MatStepperModule, MatFormFieldModule, MatInputModule],
    }),
  ],
  argTypes: {
    color: {
      table: {
        defaultValue: { summary: 'primary' },
        category: 'Color',
      },
      options: [ColorComponent.primary, ColorComponent.accent, ColorComponent.warn, ColorComponent.info, ColorComponent.warning, ColorComponent.success],
      control: { type: 'radio' },
    },
  },
} as Meta;

type Story = StoryObj<StepperComponent>
export const configuracion: Story = {
  name: "mat-stepper",
  args: {
    color: ColorComponent.primary,
  }
}

