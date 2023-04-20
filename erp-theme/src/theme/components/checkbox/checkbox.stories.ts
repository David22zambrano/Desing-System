import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

export default {
  title: 'Angular Material/Checkbox',
  component: CheckboxComponent,
  decorators: [
    moduleMetadata({
      imports: [MatCheckboxModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          '`<mat-checkbox>` proporciona la misma funcionalidad que un <input"checkbox"> original mejorado con el estilo y las animaciones de Material Design',
      },
    },
  },
  argTypes: {
    size: {
      table: {
        category: 'Size',
        defaultValue: { summary: 'small' },
      },
      options: ['small', 'medium'],
      control: { type: 'radio' },
      description:
        'La altura de un checkbox puede ser modificada usando la propiedad "size". Por defecto, checkbox usa la altura "small", esta puede cambiarse a "medium"',
    },
    color: {

      options: ['primary', 'accent', 'warn'],
      control: { type: 'radio' },
      description:
        'El color de un checkbox puede cambiarse utilizando la propiedad color. Por defecto, checkbox usa el color de "accent" del tema. Esto se puede cambiar a "primary" o "warn"',
    }
  },
} as Meta;

type Story = StoryObj<CheckboxComponent>
export const table: Story = {
  name: "mat-checkbox",
  args: { size: 'small', color: 'accent' }
}
