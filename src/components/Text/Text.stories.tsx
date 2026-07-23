import type { Meta, StoryObj } from '@storybook/preact';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Foundations/Text',
  component: Text,
  args: { children: 'The quick brown fox', variant: 'body' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['logo', 'heading', 'emphasis', 'body', 'caption', 'overline'],
    },
    tone: {
      control: 'select',
      options: [undefined, 'default', 'muted', 'faint', 'disabled', 'accent'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Playground: Story = {};

export const Scale: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Text variant="logo">Logo / 600 20px</Text>
      <Text variant="heading">Heading / 600 16px</Text>
      <Text variant="emphasis">Emphasis / 500 14px</Text>
      <Text variant="body">Body / 400 13px</Text>
      <Text variant="caption">Caption / 400 12px</Text>
      <Text variant="overline">Overline / 500 11px</Text>
    </div>
  ),
};

export const Tones: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Text tone="default">default</Text>
      <Text tone="muted">muted</Text>
      <Text tone="faint">faint</Text>
      <Text tone="disabled">disabled</Text>
      <Text tone="accent">accent</Text>
    </div>
  ),
};
