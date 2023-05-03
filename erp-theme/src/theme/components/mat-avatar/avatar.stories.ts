import { Meta, StoryObj, moduleMetadata, } from '@storybook/angular';
import { AvatarComponent } from './avatar.component';
import { MaterialModule } from '../../material.module';

export default {
  title: 'Angular material/avatar',
  component: AvatarComponent,
  decorators: [
    moduleMetadata({
      imports: [MaterialModule]
    }),
  ],
  parameters: {
    layout: "centered"
  },
  argTypes: {
    nombre: {
      table: {
        category: 'nombre',
      },
      description: 'sinco soft',
    },
  }
} as Meta<AvatarComponent>;

type Story = StoryObj<AvatarComponent>;

export const circular: Story = {
  name: "circular",
  render: () => ({
    template: `
<mat-avatar [variant]="'circular'" [nombre]="'sinco theme'"/>
<mat-avatar [variant]="'circular'" size="medium" [nombre]="'sinco theme'"/>
`
  })
}
export const square: Story = {
  name: "square",
  render: () => ({
    template: `
<mat-avatar [variant]="'square'" [nombre]="'sinco theme'"/>
<mat-avatar [variant]="'square'" size="medium" [nombre]="'sinco theme'"/>
`
  })
}

export const rounded: Story = {
  name: "rounded",
  render: () => ({
    template: `
<mat-avatar [variant]="'rounded'" [nombre]="'sinco theme'"/>
<mat-avatar [variant]="'rounded'" size="medium" [nombre]="'sinco theme'"/>
`
  })
}
