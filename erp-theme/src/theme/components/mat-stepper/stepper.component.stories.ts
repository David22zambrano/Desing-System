import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { StepperComponent } from './stepper.component';
export default {
  title: 'Angular Material/Stepper',
  component: StepperComponent,
  decorators: [
    moduleMetadata({
      imports: [MatStepperModule, MatFormFieldModule, MatInputModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'El `<mat-stepper>` proporciona un flujo de trabajo similar a un asistente al dividir el contenido en pasos lógicos',
      },
    },
  },
  argTypes: {
    color: {
      table: {
        defaultValue: { summary: 'primary' },
        category: 'Color',
      },
      description:
        'Los colores de los Stepper los define su variante, la cual puede ser: `primary` `secondary` `warn` `warning` `caution` `info`',
      options: ['primary', 'accent', 'warn', 'success', 'caution', 'info'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<StepperComponent> = (args: StepperComponent) => ({
  props: args,
});
export const configuracion = Template.bind({});
configuracion.args = {
  color: 'primary',
};
configuracion.storyName = 'mat-stepper';
