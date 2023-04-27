import { moduleMetadata, StoryObj, Meta } from '@storybook/angular';
import { ToolbarComponent } from './toolbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ColorComponent } from 'src/theme/model/modelo.model';
export default {
  title: 'Angular Material/Toolbar',
  component: ToolbarComponent,
  decorators: [
    moduleMetadata({
      imports: [MatButtonModule, MatIconModule, MatToolbarModule],
    }),
  ],
  argTypes: {
    color: {
      table: {
        category: 'Color',
        defaultValue: { summary: 'primary' },
      },
      options: [ColorComponent.primary, ColorComponent.accent, ColorComponent.warn, ColorComponent.info, ColorComponent.warning, ColorComponent.success],
      control: { type: 'radio' },
    },
  },
} as Meta;

type Story = StoryObj<ToolbarComponent>

export const toolbar: Story = {
  name: 'mat-toolbar',
  args: {
    color: ColorComponent.primary
  }
}


