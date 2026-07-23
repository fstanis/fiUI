import type { Meta, StoryObj } from '@storybook/preact';
import { Kbd } from './Kbd';

const meta: Meta<typeof Kbd> = {
  title: 'Components/Kbd',
  component: Kbd,
  args: { children: '⌘O' },
};

export default meta;
type Story = StoryObj<typeof Kbd>;

export const Default: Story = {};

export const Combo: Story = {
  render: () => (
    <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}>
      <Kbd>⌘</Kbd>
      <Kbd>⇧</Kbd>
      <Kbd>P</Kbd>
    </span>
  ),
};
