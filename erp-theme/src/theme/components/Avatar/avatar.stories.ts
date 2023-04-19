import { Meta, StoryObj, moduleMetadata,  } from '@storybook/angular';
import { MatAvatarComponent } from './mat-avatar.component';
import { MaterialModule } from '../../material.module';
import { Size } from '../../model/modelo.model';

export default {
  title: 'Avatar/avatarComponent',
  component: MatAvatarComponent,
  decorators: [
    moduleMetadata({
        imports: [MaterialModule]
    }),
  ],
} as Meta<MatAvatarComponent>;

type Story = StoryObj<MatAvatarComponent>; 

export const Avatar : Story  = {
    args: {
        arrayAvatar: [
           {
            size: 'small',
            variant: 'circular'
           },
        ]
    }
}

