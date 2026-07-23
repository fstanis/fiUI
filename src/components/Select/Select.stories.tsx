import type { Meta, StoryObj } from '@storybook/preact';
import { useState } from 'preact/hooks';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

function MaxWidthDemo() {
  const [value, setValue] = useState('1920');
  return (
    <Select
      label="max width"
      suffix="px"
      value={value}
      onChange={setValue}
      options={[
        { label: '1280', value: '1280' },
        { label: '1920', value: '1920' },
        { label: '2048', value: '2048' },
        { label: '3840', value: '3840' },
      ]}
    />
  );
}

function PlaceholderDemo() {
  const [value, setValue] = useState<string | undefined>(undefined);
  return (
    <Select
      placeholder="resize mode…"
      value={value}
      onChange={setValue}
      options={[
        { label: 'longest side', value: 'longest' },
        { label: 'width', value: 'width' },
        { label: 'height', value: 'height' },
        { label: 'percent', value: 'percent' },
      ]}
    />
  );
}

export const WithValueAndSuffix: Story = { render: () => <MaxWidthDemo /> };
export const Placeholder: Story = { render: () => <PlaceholderDemo /> };

export const Disabled: Story = {
  render: () => (
    <Select
      disabled
      label="max width"
      suffix="px"
      value="1920"
      onChange={() => {}}
      options={[{ label: '1920', value: '1920' }]}
    />
  ),
};
