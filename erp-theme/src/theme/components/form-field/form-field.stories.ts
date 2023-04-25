import { Meta, StoryObj, moduleMetadata, } from '@storybook/angular';

import { MaterialModule } from '../../material.module';
import { FormFieldComponent } from './form-field.component';

export default {
  title: 'FormField/FormFieldComponent',
  component: FormFieldComponent,
  decorators: [
    moduleMetadata({
      imports: [MaterialModule]
    }),

  ],
  args: {
    ArrayFormFields: [
      {
        size: 'small',
        appareance: 'outline'
      },
    ]
  },

} as Meta<FormFieldComponent>;

type Story = StoryObj<FormFieldComponent>;

export const FormField: Story = {
  argTypes: {
    appearance: {
      options: ['fill', 'outline'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'outline', },
      },
    },
    size: {
      options: ["small", "medium"],
      control: { type: 'radio' },
    },
  }
}

