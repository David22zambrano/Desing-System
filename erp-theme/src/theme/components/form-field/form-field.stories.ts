import { Meta, StoryObj, moduleMetadata,  } from '@storybook/angular';

import { MaterialModule } from '../../material.module';
import { FormFieldComponent } from './form-field.component';
import { Sizes } from '../../model/modelo.model';

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

export const FormField : Story  = {
      argTypes: {
            appearance: {
                options: ['fill', 'outline'],
                control: { type: 'radio' },
                table: {
                  defaultValue: { summary: 'outline', },
                },
        },
            size: {
                options: [ Sizes.small, Sizes.medium ],
                control: { type: 'radio' },
        },      
    }
}

