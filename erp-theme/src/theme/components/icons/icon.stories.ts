import { Meta, StoryObj } from '@storybook/angular';

export default {
  title: 'Clases/Icon',
  argTypes: {

  },
} as Meta;

type Story = StoryObj
export const iconsClass: Story = {
  name: 'icons',
  render: () => ({
    template: `
    <div id="center">
        <mat-icon class="material-icons">home</mat-icon>
        <mat-icon class="material-icons-outlined">home</mat-icon>
        <mat-icon class="material-icons-two-tone">home</mat-icon>
    </div>
  `,
  }),
};
