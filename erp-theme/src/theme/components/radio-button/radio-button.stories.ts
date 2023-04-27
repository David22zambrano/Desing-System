import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { RadioButtonComponent } from './radio-button.component';
import { MatRadioModule } from '@angular/material/radio';
import { ColorComponent } from 'src/theme/model/modelo.model';
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
  argTypes: {
    color: {
      table: {
        category: 'color',
        defaultValue: { summary: 'Primary' },
      },
      options: [ColorComponent.primary, ColorComponent.accent, ColorComponent.warn, ColorComponent.info, ColorComponent.warning, ColorComponent.success],
      control: { type: 'radio' },
    },
    size: {
      table: {
        category: 'Sizes',
        defaultValue: { summary: 'small' },
      },
      options: ['small', 'medium'],
      control: { type: 'radio' },
    },
  },
} as Meta;

type Story = StoryObj<RadioButtonComponent>

export const RadioButton: Story = {
  name:"radio-button",
  args: {
    size: 'small',
    color: ColorComponent.primary
  }
}

