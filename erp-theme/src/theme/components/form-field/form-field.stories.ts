import { Meta, StoryObj, moduleMetadata, } from '@storybook/angular';
import { MaterialModule } from '../../material.module';
import { FormFieldComponent } from './form-field.component';

export default {
  title: 'Angular material/Form-field',
  component: FormFieldComponent,
  decorators: [
    moduleMetadata({
      imports: [MaterialModule]
    }),
  ],
  argTypes: {
    size: {
      table: {
        category: 'Size',
      },
      options: ['small', 'medium'],
      control: { type: 'radio' },
    },
    appearance: {
      table: {
        category: 'Apparance',
      },
      options: ['outline', 'fill'],
      control: { type: 'radio' },
    }
  }
} as Meta<FormFieldComponent>

type Story = StoryObj<FormFieldComponent>;

export const formField: Story = {
  name: "form-field",
  args: {
    size: "small",
    appearance: "outline",
  }
}

