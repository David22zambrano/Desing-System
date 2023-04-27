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
  argTypes: {
    size: {
      table: {
        category: 'Size',
        defaultValue: { summary: 'small' },
      },
      options: ['small', 'medium'],
      control: { type: 'radio' },
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

