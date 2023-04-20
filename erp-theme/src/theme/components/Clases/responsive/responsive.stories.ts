import { Meta, StoryObj } from '@storybook/angular';
import { ResponsiveComponent } from './responsive.component';

export default {
  title: 'Clases/Responsive',
  argTypes: {
    MiniMobile: {
      table: {
        category: 'Responsive',
      },
      control: { type: null },
      description: 'De 0 a 400px.`$breakpoint-mini-mobile`',
      defaultValue: '$breakpoint',
    },
    Mobile: {
      table: {
        category: 'Responsive',
        control: { type: null },
        defaultValue: '$breakpoint',
      },
      description: 'De 400px a 525px.`$breakpoint-mobile`',
    },
    Tablet: {
      table: {
        category: 'Responsive',
      },
      control: { type: null },
      description: 'De 525px a 850px.`$breakpoint-tablet`',
      defaultValue: '$breakpoint',
    },
    Laptop: {
      table: {
        category: 'Responsive',
      },
      control: { type: null },
      description: 'De 850px a 1024px.`$breakpoint-Laptop`',
      defaultValue: '$breakpoint',
    },
    Desktop: {
      table: {
        category: 'Responsive',
      },
      control: { type: null },
      description: 'De 1024px a 1200px.`$breakpoint-Desktop`',
      defaultValue: '$breakpoint',
    },
    Monitor: {
      table: {
        category: 'Responsive',
      },
      control: { type: null },
      description: 'De 1200px a Infinito.`$breakpoint-Monitor`',
      defaultValue: '$breakpoint',
    },
  },
} as Meta;

type Story = StoryObj<ResponsiveComponent>
export const responsiveClass: Story = {
  name: 'I am the primary',
  render: () => ({
    props: {},
  }),
};
