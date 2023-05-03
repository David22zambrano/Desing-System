import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';

export default {
  title: 'Angular Material/Chip',
  decorators: [
    moduleMetadata({
      imports: [MatChipsModule, MatIconModule],
    }),
  ],
  parameters: {
    layout: "centered"
  }
} as Meta;

type Story = StoryObj

export const small: Story = {
  name: "small",
  render: () => ({
    template: `
    <mat-chip>Theme</mat-chip>
    <mat-chip>
    <button matChipRemove>
    <mat-icon>cancel</mat-icon>
  </button>
    Theme
    </mat-chip>
    `
  })

}
