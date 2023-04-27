import { MatTabsModule } from '@angular/material/tabs';
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { MatTabsComponent } from './mat-tabs.component';
import { ColorComponent } from 'src/theme/model/modelo.model';
export default {
  title: 'Angular Material/tabs',
  component: MatTabsComponent,
  decorators: [
    moduleMetadata({
      imports: [MatTabsModule],
    }),
  ],
  argTypes: {
    color: {
      table: {
        defaultValue: { summary: 'defaul' },
        category: 'Color',
      },
      options: [ColorComponent.primary, ColorComponent.accent, ColorComponent.warn, ColorComponent.info, ColorComponent.warning, ColorComponent.success],
      control: { type: 'radio' },
    },
  }
} as Meta;


type Story = StoryObj<MatTabsComponent>
export const configuracion: Story = {
  name: "mat-tabs",
  args: {
    color: ColorComponent.primary,
  }
}
