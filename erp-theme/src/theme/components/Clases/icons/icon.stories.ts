import { Meta, StoryObj } from '@storybook/angular';
import { IconComponent } from './icon.component';

export default {
  title: 'Clases/Icon',
  argTypes: {
    filled: {
      table: {
        category: 'Icons',
      },
      control: { type: null },
      description:
        'Valor por defecto, iconos sólidos en su totalidad.`class="mat-icon-filled"`',
      defaultValue: 'icon',
    },
    outline: {
      table: {
        category: 'Icons',
      },
      control: { type: null },
      description:
        'Icono con contorno sólido, diferente al filled.`class="mat-icon-outline"`',
      defaultValue: 'icon',
    },
    two_tone: {
      table: {
        category: 'Icons',
      },
      control: { type: null },
      description:
        'Icono el cual su contorno y relleno es sólido, a comparación a los demás varian en su gradiente para dar efecto de un contorno solido y un relleno de un tono más claro.`class="mat-icon-two-tone"`',
      defaultValue: 'icon',
    },
  },
} as Meta;

type Story = StoryObj<IconComponent>
export const iconsClass: Story = {
  name: 'I am the primary',
  render: () => ({
    props: {},
  }),
};
