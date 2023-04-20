import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { TableComponent } from './table.component';
import { MatTableModule } from '@angular/material/table';
export default {
  title: 'Angular Material/Table',
  component: TableComponent,
  decorators: [
    moduleMetadata({
      imports: [MatTableModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          '`<mat-table>` proporciona una tabla de datos con estilo Material Design que se puede utilizar para mostrar filas de datos.',
      },
    },
  },
  argTypes: {
    size: {
      table: {
        category: 'Size',
        defaultValue: { summary: 'small' },
      },
      options: ['small', 'medium'],
      control: { type: 'radio' },
      description:
        'La altura de un table puede ser modificada usando la propiedad "size". Por defecto, table usa la altura "small", este puede cambiarse a "medium"',
    },
    displayedColumns: {
      table: {
        disable: true,
      },
    },
    dataSource: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

type Story = StoryObj<TableComponent>


export const table: Story = {
  name: "mat-table",
  args: { size: 'small' }
}

