import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ColorComponent } from 'src/theme/model/modelo.model';
import { SizeDirective } from 'src/theme/directivas/size.directive';

export default {
  title: 'Angular Material/Checkbox',
  decorators: [
    moduleMetadata({
      declarations: [SizeDirective],
      imports: [MatCheckboxModule],
    }),
  ],
  parameters: {
    layout: "centered"
  }
} as Meta;
type Story = StoryObj
export const small: Story = {
  name: "small",
  render: () => ({
    template: `<mat-checkbox size="small" color="primary">small</mat-checkbox>`
  })
}
export const medium: Story = {
  name: "medium",
  render: () => ({
    template: `<mat-checkbox size="medium" color="warn">medium</mat-checkbox>`
  })
}
