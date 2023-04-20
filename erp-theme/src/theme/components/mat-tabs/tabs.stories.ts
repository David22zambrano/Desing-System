import { MatTabsModule } from '@angular/material/tabs';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { MatTabsComponent } from './mat-tabs.component';
export default {
  title: 'Angular Material/tabs',
  component: MatTabsComponent,
  decorators: [
    moduleMetadata({
      imports: [MatTabsModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Las `<mat-tab>` de material angular organizan el contenido en vistas separadas donde solo se puede ver una vista a la vez.',
      },
    },
  },
  argTypes:{
    color: {
      table: {
        defaultValue: { summary: 'defaul' },
        category: 'Color',
      },
      description:
        'Los colores de los tabs los define su variante, la cual puede ser: `primary` `secondary` `warn` `warning` `caution` `info`',
      options: ['primary', 'accent', 'warn', 'success', 'caution', 'info'],
      control: { type: 'radio' },
    },
  }
} as Meta;

const Template: Story = (args) => ({
  props: args,
});
export const configuracion = Template.bind({});
configuracion.args = {
  color: 'primary',
};
configuracion.storyName = 'mat-tabs';
