import type { Meta, StoryObj } from '@storybook/preact';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  args: { children: 'error', variant: 'tint' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['tint', 'text', 'outline', 'neutral'] },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Tint: Story = { args: { variant: 'tint', children: 'error' } };
export const Text: Story = { args: { variant: 'text', children: '−84%' } };
export const Outline: Story = { args: { variant: 'outline', children: 'jpg' } };
export const Neutral: Story = { args: { variant: 'neutral', children: 'queued' } };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Badge variant="tint">error</Badge>
      <Badge variant="text">−84%</Badge>
      <Badge variant="outline">jpg</Badge>
      <Badge variant="neutral">queued</Badge>
    </div>
  ),
};
