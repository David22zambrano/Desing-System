import { moduleMetadata, StoryObj, Meta } from '@storybook/angular';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './button.component';
import { MatIconModule } from '@angular/material/icon';
import { SizeDirective } from 'src/theme/directivas/size.directive';

export default {
  title: 'Angular Material/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [SizeDirective],
      imports: [MatButtonModule, MatIconModule],
    }),
  ],
} as Meta<ButtonComponent>;

type Story = StoryObj
export const small: Story = {
  name: 'small',
  render: () => ({
    template: `<button mat-raised-button color="info" size="small">Button</button>`,
  }),
};
export const medium: Story = {
  name: 'medium',
  render: () => ({
    template: `<button mat-raised-button color="success" size="medium">Button</button>`
  }),
};
export const large: Story = {
  name: 'large',
  render: () => ({
    template: `<button mat-raised-button color="warning" size="large">Button</button>`
  }),
};
