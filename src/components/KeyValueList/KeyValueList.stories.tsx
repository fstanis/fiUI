import type { Meta, StoryObj } from '@storybook/preact';
import { KeyValueList } from './KeyValueList';

const meta: Meta<typeof KeyValueList> = {
  title: 'Components/KeyValueList',
  component: KeyValueList,
  decorators: [(Story) => <div style={{ width: 280 }}>{Story()}</div>],
};

export default meta;
type Story = StoryObj<typeof KeyValueList>;

export const Exposure: Story = {
  args: {
    title: 'exposure',
    entries: [
      { key: 'aperture', value: 'f/2.8' },
      { key: 'shutter', value: '1/250 s' },
      { key: 'iso', value: '400' },
    ],
  },
};

export const Empty: Story = {
  args: {
    title: 'exif',
    entries: [],
    emptyText: 'no exif data — metadata was stripped',
  },
};
