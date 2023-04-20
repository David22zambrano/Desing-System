import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { MatIconModule } from '@angular/material/icon';
import { MatListComponent } from './mat-list.component';
import { MatListModule } from '@angular/material/list';
export default {
  title: 'Angular Material/List',
  component: MatListComponent,
  decorators: [
    moduleMetadata({
      imports: [MatIconModule, MatListModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'El componente `<mat-list>` es un componente contenedor que envuelve y formatea una serie de archivos `<mat-list-item>`. Como componente de la lista base, proporciona estilo de Material Design, pero no tiene un comportamiento propio ',
      },
    },
  },
  argTypes: {
    size: {
      table: {
        category: 'Size',
        defaultValue: { summary: 'small' },
      },
      description:
        'Los atamaños de los Iconos los define su variante, la cual puede ser: `small` `medium`',
      options: ['small', 'medium'],
      control: { type: 'radio' },
    },
  },
} as Meta;

type Story = StoryObj<MatListComponent>

export const list: Story = {
  name:"mat-list",
  args: {
    size: 'small',
  }
}
