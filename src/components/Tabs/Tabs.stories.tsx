import type { Meta, StoryObj } from '@storybook/preact';
import { useState } from 'preact/hooks';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
};

export default meta;
type Story = StoryObj<typeof Tabs>;

function Demo() {
  const [value, setValue] = useState('compress');
  return (
    <Tabs
      value={value}
      onChange={setValue}
      options={[
        { label: 'compress', value: 'compress' },
        { label: 'strip exif', value: 'strip' },
        { label: 'help', value: 'help' },
      ]}
    />
  );
}

export const Default: Story = { render: () => <Demo /> };
