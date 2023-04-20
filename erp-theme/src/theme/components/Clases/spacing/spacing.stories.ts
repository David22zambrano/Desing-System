import { Meta, StoryObj } from '@storybook/angular';
import { SpacingComponent } from './spacing.component';

export default {
  title: 'Clases/Spacing',
  argTypes: {
    spacing_0: {
      table: {
        category: 'Spacing',
      },
      control: { type: null },
      description: 'Se aplica 0rem.`$spacing-0`',
      defaultValue: '$spacing',
    },
    spacing_1: {
      table: {
        category: 'Spacing',
      },
      control: { type: null },
      description: 'Se aplica 0.4rem.`$spacing-1`',
      defaultValue: '$spacing',
    },
    spacing_2: {
      table: {
        category: 'Spacing',
      },
      control: { type: null },
      description: 'Se aplica 0.8rem.`$spacing-2`',
      defaultValue: '$spacing',
    },
    spacing_3: {
      table: {
        category: 'Spacing',
      },
      control: { type: null },
      description: 'Se aplica 1.2rem.`$spacing-3`',
      defaultValue: '$spacing',
    },
    spacing_4: {
      table: {
        category: 'Spacing',
      },
      control: { type: null },
      description: 'Se aplica 1.6rem.`$spacing-4`',
      defaultValue: '$spacing',
    },
    spacing_5: {
      table: {
        category: 'Spacing',
      },
      control: { type: null },
      description: 'Se aplica 2rem.`$spacing-5`',
      defaultValue: '$spacing',
    },
    spacing_6: {
      table: {
        category: 'Spacing',
      },
      control: { type: null },
      description: 'Se aplica 3.2rem.`$spacing-6`',
      defaultValue: '$spacing',
    },
    spacing_7: {
      table: {
        category: 'Spacing',
      },
      control: { type: null },
      description: 'Se aplica 4.8rem.`$spacing-7`',
      defaultValue: '$spacing',
    },
    p: {
      table: {
        category: 'Padding',
      },
      control: { type: null },
      description:
        'El elemento tendra relleno en todos sus lados.`class="p-1"`',
      defaultValue: 'p',
    },
    py: {
      table: {
        category: 'Padding',
      },
      control: { type: null },
      description:
        'El elemento tendra relleno en el lado superior e inferior (Top-Bottom).`class="py-1"`',
      defaultValue: 'p',
    },
    px: {
      table: {
        category: 'Padding',
      },
      control: { type: null },
      description:
        'El elemento tendra relleno al lado izquierdo y derecho (Left-Right).`class="px-1"`',
      defaultValue: 'p',
    },
    pt: {
      table: {
        category: 'Padding',
      },
      control: { type: null },
      description:
        'El elemento solo tendra relleno en el lado superior (Top).`class="pt-1"`',
      defaultValue: 'p',
    },
    pb: {
      table: {
        category: 'Padding',
      },
      control: { type: null },
      description:
        'El elemento solo tendra relleno en el lado inferior (Bottom).`class="pb-1"`',
      defaultValue: 'p',
    },
    pl: {
      table: {
        category: 'Padding',
      },
      control: { type: null },
      description:
        'El elemento solo tendra relleno en el lado izquierdo (Left).`class="pl-1"`',
      defaultValue: 'p',
    },
    pr: {
      table: {
        category: 'Padding',
      },
      control: { type: null },
      description:
        'EL elemento solo tendra relleno en el lado derecho (Rigth).`class="pr-1"`',
      defaultValue: 'p',
    },
    m: {
      table: {
        category: 'Margin',
      },
      control: { type: null },
      description:
        'El elemento tendra margenes en todos sus lados.`class="m-1"`',
      defaultValue: 'm',
    },
    my: {
      table: {
        category: 'Margin',
      },
      control: { type: null },
      description:
        'El elemento tendra margenes al lado superior e inferior (Top-Bottom).`class="my-1"`',
      defaultValue: 'm',
    },
    mx: {
      table: {
        category: 'Margin',
      },
      control: { type: null },
      description:
        'El elemento tendra margenes al lado izquierdo y derecho (Left-Right).`class="mx-1"`',
      defaultValue: 'm',
    },
    mt: {
      table: {
        category: 'Margin',
      },
      control: { type: null },
      description:
        'El elemento solo tendra una margen en el lado superior (Top).`class="mt-1"`',
      defaultValue: 'm',
    },
    mb: {
      table: {
        category: 'Margin',
      },
      control: { type: null },
      description:
        'El elemento solo tendra una margen en el lado inferior (Bottom).`class="mb-1"`',
      defaultValue: 'm',
    },
    ml: {
      table: {
        category: 'Margin',
      },
      control: { type: null },
      description:
        'El elemento solo tendra una margen en el lado izquierdo (Left).`class="ml-1"`',
      defaultValue: 'm',
    },
    mr: {
      table: {
        category: 'Margin',
      },
      control: { type: null },
      description:
        'EL elemento solo una margen relleno en el lado derecho (Rigth).`class="mr-1"`',
      defaultValue: 'm',
    },
  },
} as Meta;

type Story = StoryObj<SpacingComponent>
export const spacingClass: Story = {
  name: 'I am the primary',
  render: () => ({
    props: {},
  }),
};
