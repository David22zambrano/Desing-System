import { moduleMetadata,  Meta, StoryObj } from '@storybook/angular';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TogglebuttonComponent } from './togglebutton.component';
import { MatIconModule } from '@angular/material/icon';

export default {
  title: 'Angular Material/Button-toggle',
  component: TogglebuttonComponent,
  decorators: [
    moduleMetadata({
      imports: [MatButtonToggleModule, MatIconModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          '`<mat-button-toggle>` son interruptores de encendido/apagado con la apariencia de un botón. Estos conmutadores se pueden configurar para que se comporten como botones de radio o casillas de verificación',
      },
    },
  },
  argTypes: {
    size: {
      table: {
        category: 'Size',
        defaultValue: { summary: 'small' },
      },
      description:
        'Los atamaños de los button-toggle los define su variante, la cual puede ser: `small` `medium` `large`',
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
  },
} as Meta;


type Story = StoryObj<TogglebuttonComponent>

export const configuracion: Story = {
  name: 'mat-button-toggle',
  args: {
    size: 'small',
  }
}

