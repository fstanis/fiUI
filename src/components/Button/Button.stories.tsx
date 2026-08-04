import type { Meta, StoryObj } from '@storybook/preact';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'download all (.zip)',
    variant: 'primary',
    disabled: false,
  },
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'secondary', 'toolbar', 'quiet'] },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { variant: 'primary' } };
export const Secondary: Story = { args: { variant: 'secondary', children: 'cancel' } };
export const Toolbar: Story = { args: { variant: 'toolbar', children: '← prev' } };
export const Quiet: Story = { args: { variant: 'quiet', children: 'adaptive · from 6.0 breaths/min · tones' } };
export const Disabled: Story = { args: { disabled: true } };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant="primary">download all (.zip)</Button>
      <Button variant="secondary">cancel</Button>
      <Button variant="toolbar">← prev</Button>
      <Button variant="quiet">settings</Button>
      <Button disabled>download all (.zip)</Button>
    </div>
  ),
};
