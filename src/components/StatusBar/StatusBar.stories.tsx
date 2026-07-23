import type { Meta, StoryObj } from '@storybook/preact';
import { StatusBar } from './StatusBar';

const meta: Meta<typeof StatusBar> = {
  title: 'Chrome/StatusBar',
  component: StatusBar,
};

export default meta;
type Story = StoryObj<typeof StatusBar>;

export const Default: Story = {
  args: {
    left: '3 of 128 · 4000×3000 · 4.2 MB · fit (34%)',
    right: 'imgvw.sh',
  },
};
