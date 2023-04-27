import { Meta, StoryObj } from '@storybook/angular';
import { LayoutComponent } from './layout.component';

export default {
  title: 'Clases/Layout',
  component: LayoutComponent,
  argTypes: {

    flex: {
      table: {
        category: 'Flexbox',
        defaultValue: { summary: 'd-flex' },
      },
      options: [
        'none',
        'd-flex',
        'row',
        'wrap',
        'nowrap',
        'row_reverse',
        'column',
        'column_reverse',
      ],
      control: { type: 'radio' },
      description: 'Inicializa el flexbox.`class="d-flex"`',
    },
    grid: {
      table: {
        category: 'Grid',
        defaultValue: 'd-grid',
      },
      options: ['grid_template_columns'],
      control: { type: 'radio' },
      description: 'Incializa el grid.`class="d-grid"`',
    },
    items: {
      table: {
        category: 'Align-items',
        defaultValue: 'start',
      },
      options: [
        'none',
        'align-items_center',
        'align-items_start',
        'align-items_end',
        'align_items_baseline',
        'align_items_stretch',
      ],
      control: { type: 'radio' },
      description:
        'Los elementos se agrupan uno junto al otro hacia el borde inicial del contenedor de alineación en el eje apropiado.`class="align-items-start"`',
    },
    justify: {
      table: {
        category: 'Justify-content',
        defaultValue: 'justify_content_start',
      },
      options: [
        'justify-content-start',
        'justify_content_end',
        'justify_content_center',
        'justify_content_between',
        'justify_content_around',
        'justify_content_baseline',
        'justify_content_stretch',
      ],
      control: { type: 'radio' },
      description:
        'Los elementos se ubican al incio del contenedor.`class="justify-content-start"`',
    },
  },
} as Meta;

type Story = StoryObj<LayoutComponent>
export const layoutClass: Story = {
  name: 'layout',
};
