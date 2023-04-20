import { Meta, StoryObj } from "@storybook/angular";
import { ColorsComponent } from './colors.component';

export default {
  title: 'Colors-typography/Colores',
  parameters: {
    componentSubtitle: 'descripcion',
    docs: {
      description: {
        component:
          `<br>Una paleta es una colección de colores que representan una parte del espacio de color. Cada valor de esta colección se denomina matiz . En Material Design, cada tono de una paleta tiene un número de identificación. Estos números de identificación incluyen 50 y luego cada 100 valores entre 100 y 900. Los números ordenan los tonos dentro de una paleta de más claro a más oscuro.Angular Material representa una paleta como un mapa Sass . Este mapa contiene los tonos de la paleta y otro mapa anidado de colores de contraste para cada uno de los tonos.
                <br><br>El sistema de diseño propio de angular Material solo permite trabajar con 3 colores globales para todos los componentes incluyendo entre otras cosas sus estados, tipografias, animaciones y temas oscuros. Por tal motivo se decidio agregar 4 paletas nuevas de colores, una dedicada directamnete para cambiar los estilos  de primer plano de elementos en especifico,lo anterior espara aumentar las posibilidades de generar una mejor experiencia de usuario.
                <br><br><h4>paletas nuevas</h4><ul><li class="mat-subtitle-1">success-color</li><li class="mat-subtitle-1">info-color</li><li class="mat-subtitle-1">caution-color</li><li class="mat-subtitle-1">grey-color</li></ul>
               `
      }
    },
  },
  component: ColorsComponent,
} as Meta<ColorsComponent>

type Story = StoryObj<ColorsComponent>
export const colors: Story = {
  name: "Colores"
}
