import { MatMenuComponent } from './menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'Angular Material/Menu',
  component: MatMenuComponent,
  decorators: [
    moduleMetadata({
      imports: [MatMenuModule, MatButtonModule, BrowserAnimationsModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          '`<mat-menu>` es un panel flotante que contiene una lista de opciones',
      },
    },
  },
  argTypes: {
    size: {
      options: ['small', 'medium'],
      control: { type: 'radio' },
      table: {
        category: 'Size',
        defaultValue: { summary: 'medium' },
      },
      description:
        'Los tamaños del menu los define su clase, la cual puede ser: `"small"` `"medium"`<br> La clase se puede aplicar directamente al contenedor padre `<mat-menu>` o directamente aplicar la propiedad `size` a cada uno de los items de la lista.',
    },
  },
} as Meta;

type Story = StoryObj<MatMenuComponent>
export const menu: Story = {
  name: "mat-menu",
  args: {
    size: 'medium',
  }
}
