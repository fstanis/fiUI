import type { Meta, StoryObj } from '@storybook/preact';
import { useState } from 'preact/hooks';
import { SegmentedControl } from './SegmentedControl';

const meta: Meta<typeof SegmentedControl> = {
  title: 'Components/SegmentedControl',
  component: SegmentedControl,
};

export default meta;
type Story = StoryObj<typeof SegmentedControl>;

function FormatDemo() {
  const [value, setValue] = useState('auto');
  return (
    <SegmentedControl
      label="format"
      value={value}
      onChange={setValue}
      options={[
        { label: 'auto', value: 'auto' },
        { label: 'jpg', value: 'jpg' },
        { label: 'png', value: 'png' },
      ]}
    />
  );
}

function StripDemo() {
  const [value, setValue] = useState('strip');
  return (
    <SegmentedControl
      value={value}
      onChange={setValue}
      options={[
        { label: 'strip', value: 'strip' },
        { label: 'keep', value: 'keep' },
      ]}
    />
  );
}

function InlineDemo() {
  const [value, setValue] = useState('box');
  return (
    <SegmentedControl
      variant="inline"
      value={value}
      onChange={setValue}
      options={[
        { label: 'box 4-4-4-4', value: 'box' },
        { label: '4-7-8', value: 'p478' },
        { label: 'coherent 5.5', value: 'coherent' },
      ]}
    />
  );
}

export const WithLabel: Story = { render: () => <FormatDemo /> };
export const TwoOptions: Story = { render: () => <StripDemo /> };
export const Inline: Story = { render: () => <InlineDemo /> };

export const Disabled: Story = {
  render: () => (
    <SegmentedControl
      disabled
      value="auto"
      onChange={() => {}}
      options={[
        { label: 'auto', value: 'auto' },
        { label: 'jpg', value: 'jpg' },
        { label: 'png', value: 'png' },
      ]}
    />
  ),
};
