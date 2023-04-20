import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { RadioButtonComponent } from './radio-button.component';
import { MatRadioModule } from '@angular/material/radio';
// import { Colors, descripcionComponent, Sizes } from '../../assets/model/modelo.model';
// import { MaterialModule } from '../../../app/material.module';
export default {
  title: 'Angular Material/Radio-Button',
  component: RadioButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [MatRadioModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          '`<mat-radio-button>` proporciona la misma funcionalidad que un nativo <input type="radio"> mejorado con estilo y animaciones de Material Design',
      },
    },
  },
  argTypes: {
    color: {
      table: {
        category: 'color',
        defaultValue: { summary: 'Primary' },
      },
      description:
        'Los colores deL toolbar los define su variante, la cual puede ser: `primary` `secondary` `warn` `warning` `caution` `info`',
      options: ['primary', 'accent', 'warn', 'success', 'caution', 'info'],
      control: { type: 'radio' },
    },
    size: {
      table: {
        category: 'Sizes',
        defaultValue: { summary: 'small' },
      },
      description:
        'Los colores de los Iconos los define su variante, la cual puede ser: `primary` `secondary` `warn` `warning` `caution` `info`',
      options: ['small', 'medium'],
      control: { type: 'radio' },
    },
  },
} as Meta;

type Story = StoryObj<RadioButtonComponent>

export const RadioButton: Story = {
  args: {
    size: 'small',
  }
}

