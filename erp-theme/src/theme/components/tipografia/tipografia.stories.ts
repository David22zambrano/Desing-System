import { Meta, StoryObj } from '@storybook/angular';
import { TipografiaComponent } from './tipografia.component';

export default {
  title: 'Colors-typography/typography',
  parameters: {
    componentSubtitle: 'descripcion',
    docs: {
      description: {
        component: `<br>La tipografía es una forma de organizar los tipos de letra para que el texto sea legible y atractivo cuando se muestra. El sistema de tematización de Angular Material permite personalizar la configuración tipográfica de los componentes de la librería. Además, Angular Material proporciona APIs para aplicar estilos tipográficos a los elementos de tu propia aplicación.
         <br><br>Entre la configuracion global para la tipografia se agregaron 5 niveles nuevos de tipografia dedicadas directamente para estilizar las tiquetas h3,h4,h5,h6 y una estilizacion para capitalizar los textos dentro de un elemento.
         <br><br><span class="mat-subtitle-1">font-family</span>: <span class="mat-subtitle-2>Roboto,Nunito</span><br><span class="mat-subtitle-1">font weight</span>: <span class="mat-subtitle-2>300,400,500,600,700</span><br><span class="mat-subtitle-1">rem value</span>: <span class="mat-subtitle-2>/* 62.5% of 16px = 10px */</span>
        `,
      },
    },
  },
  component: TipografiaComponent,

} as Meta<TipografiaComponent>;

type Story = StoryObj<TipografiaComponent>
export const Tipografia: Story = {
  args: {}
};
