import type { Meta, StoryObj } from '@storybook/preact';
import { ProgressBar } from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  args: { value: 60, max: 100 },
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100 } },
  },
  decorators: [(Story) => <div style={{ width: 240 }}>{Story()}</div>],
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {};
export const Empty: Story = { args: { value: 0 } };
export const Complete: Story = { args: { value: 100 } };
