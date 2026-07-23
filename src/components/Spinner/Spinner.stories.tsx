import type { Meta, StoryObj } from '@storybook/preact';
import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  args: { size: 14, thickness: 2 },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
      <Spinner size={14} />
      <Spinner size={24} thickness={3} />
      <Spinner size={40} thickness={4} />
    </div>
  ),
};
