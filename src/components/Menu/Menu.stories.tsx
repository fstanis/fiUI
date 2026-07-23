import type { Meta, StoryObj } from '@storybook/preact';
import { useState } from 'preact/hooks';
import { Menu } from './Menu';

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
};

export default meta;
type Story = StoryObj<typeof Menu>;

function MenuDemo() {
  const [value, setValue] = useState('longest');
  return (
    <Menu
      value={value}
      onSelect={setValue}
      items={[
        { label: 'longest side', value: 'longest' },
        { label: 'width', value: 'width' },
        { label: 'height', value: 'height' },
        { label: 'percent', value: 'percent' },
      ]}
    />
  );
}

export const Open: Story = { render: () => <MenuDemo /> };
