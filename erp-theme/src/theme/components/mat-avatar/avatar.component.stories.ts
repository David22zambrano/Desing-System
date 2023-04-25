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
  argTypes: {
    size: {
      table: {
        category: 'Size',
      },
      options: ['small', 'medium'],
      control: { type: 'radio' },
    },
    variant: {
      table: {
        category: 'variant',
      },
      control: { type: 'radio' },
      options: ['rounded', 'square', 'circular']
    },
    nombre: {
      table: {
        category: 'nombre',
      },
      description: 'sinco soft',
    },
  }
} as Meta<AvatarComponent>;

type Story = StoryObj<AvatarComponent>;

export const Avatar: Story = {
  name: "mat-avatar",
  args: {
    size: "small",
    nombre: "sinco theme",
    variant: "circular"
  },


}

