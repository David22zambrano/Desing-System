import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ToolbarComponent } from './toolbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
export default {
  title: 'Angular Material/Toolbar',
  component: ToolbarComponent,
  decorators: [
    moduleMetadata({
      imports: [MatButtonModule, MatIconModule, MatToolbarModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'El componente `<mat-toolbar>` es un contenedor para encabezados, títulos o acciones. ',
      },
    },
  },
  argTypes: {
    color: {
      table: {
        category: 'Color',
        defaultValue: { summary: 'primary' },
      },
      description:
        'Los colores deL toolbar los define su variante, la cual puede ser: `primary` `secondary` `warn` `warning` `caution` `info`',

      options: ['primary', 'accent', 'warn', 'success', 'caution', 'info'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<ToolbarComponent> = (args: ToolbarComponent) => ({
  props: args,
});

export const toolbar = Template.bind({});
toolbar.args = {
  color: 'primary',
};
toolbar.storyName = 'mat-toolbar';
