import type { Meta, StoryObj } from '@storybook/preact';
import { Callout } from './Callout';

const meta: Meta<typeof Callout> = {
  title: 'Components/Callout',
  component: Callout,
  decorators: [(Story) => <div style={{ maxWidth: 560 }}>{Story()}</div>],
};

export default meta;
type Story = StoryObj<typeof Callout>;

export const WithAction: Story = {
  args: {
    children: 'no heart-rate sensor connected — hr / hrv will not be recorded',
    action: { label: 'connect →', onClick: () => {} },
  },
};

export const MessageOnly: Story = {
  args: {
    children: 'files never leave your browser',
  },
};

export const Neutral: Story = {
  args: {
    variant: 'neutral',
    children: 'reconnects automatically next visit',
  },
};
