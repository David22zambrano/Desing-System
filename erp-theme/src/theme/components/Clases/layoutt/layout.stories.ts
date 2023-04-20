import { Meta, StoryObj } from '@storybook/angular';
import { LayoutComponent } from './layout.component';

export default {
  title: 'Clases/Layout',
  component: LayoutComponent,
  parameters: {
    docs: {
      description: {
        component:
          'Las clases de diseño son usadas para lograr distintos tipos de diseño, de esta manera dividiendo la pagina en secciones definiendo su tamaño, posición y las capas que tendra .',
      },
    },
  },
  argTypes: {
    column: {
      table: {
        category: 'Column',
        defaultValue: { summary: 'col-1' },
      },
      options: [
        'col-1',
        'col-2',
        'col-3',
        'col-4',
        'col-4',
        'col-5',
        'col-6',
        'col-7',
        'col-8',
        'col-9',
        'col-10',
        'col-11',
        'col-12',
      ],
      control: { type: 'radio' },
      description:
        'Las clases de diseño son usadas para lograr distintos tipos de diseño, de esta manera dividiendo la pagina en secciones definiendo su tamaño, posición y las capas que tendra.`',
    },
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
  name: 'I am the primary',
  render: () => ({
    props: {},
  }),
};
