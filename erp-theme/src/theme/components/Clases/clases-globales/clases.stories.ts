import { Meta, StoryObj } from '@storybook/angular';
import { ClasesGlobalesComponent } from './clases-globales.component';
export default {
  title: 'Clases/Global classes',
  component: ClasesGlobalesComponent,
  parameters: {
    docs: {
      description: {
        component:
          'Las clases globales almacenan propiedades que son aplicadas a los elementos, dichas clases son usadas para modificar el alineamiento de los textos, el estado del cursor, la opacidad, la forma en que se organizan o su ubicación contenedor.',
      },
    },
  },
  argTypes: {
    text: {
      table: {
        category: 'Text-aling',
      },
      options: ['text-align-left', 'text-align-center', 'text-align-right'],
      control: { type: 'radio' },
      description:
        'A pesar de su nombre, la propiedad text-align no sólo controla la alineación del texto. En realidad, esta propiedad establece la alineación de los contenidos (texto, imágenes) que se encuentran dentro de un elemento de bloque.',
    },
    cursor: {
      table: {
        category: 'Cursor',
      },
      options: [
        'none',
        'help',
        'progress',
        'wait',
        'text',
        'not_allowed',
        'pointer',
      ],
      control: { type: 'radio' },
      description:
        ' establece el cursor del mouse, si lo hay, para mostrar cuando el puntero del mouse está sobre un elemento.cursor`',
    },
    opacity: {
      table: {
        category: 'Opacity',
      },
      options: [
        'opacity-0',
        'opacity-25',
        'opacity-50',
        'opacity-75',
        'opacity-100',
      ],
      control: { type: 'radio' },
      description:
        ' opacity define la transparencia de un elemento, esto es, en qué grado se superpone el fondo al elemento',
    },
    display: {
      table: {
        category: 'Display',
      },
      control: { type: 'radio' },
      options: ['d-flex', 'd-grid', 'd-block', 'd-none', 'd-inline'],
      description:
        'La propiedad CSS display especifica si un elemento es tratado como block or inline element y el diseño usado por sus hijos, como flow layout(Diseño de Flujo), grid(Cuadricula) o flex(Flexible).',
    },
    position: {
      table: {
        category: 'Position',
      },
      options: ['absolute', 'relative', 'fixed', 'static', 'sticky'],
      control: { type: 'radio' },
      description:
        'La propiedad CSS establece cómo se coloca un elemento en un documento. Las propiedades , , y determinan la ubicación final de los elementos posicionados.position toprightbottomleft`',
    },
    shadow: {
      table: {
        category: 'shadow',
      },
      options: ['s-none'],
      control: { type: 'radio' },
      description:
        'box-shadow añade efectos de sombra alrededor del marco de un elemento. Se pueden definir múltiples efectos separados por comas. La caja de la sombra se describe por los desplazamientos en X e Y, los radios de desenfoque y dispersión, y el color relativos al elemento.`',
    },
  },
} as Meta;

type Story = StoryObj<ClasesGlobalesComponent>
export const globalClass: Story = {
  name: 'clases globales',

};
