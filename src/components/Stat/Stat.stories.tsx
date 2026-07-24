import type { Meta, StoryObj } from '@storybook/preact';
import { Stat } from './Stat';

const meta: Meta<typeof Stat> = {
  title: 'Components/Stat',
  component: Stat,
};

export default meta;
type Story = StoryObj<typeof Stat>;

export const Single: Story = {
  args: { value: '62', label: 'bpm' },
};

export const Accent: Story = {
  args: { value: '4.3', label: 'coherence', tone: 'accent' },
};

export const Row: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 64 }}>
      <Stat value="62" label="bpm" />
      <Stat value="54" label="hrv ms" />
      <Stat value="4.3" label="coherence" tone="accent" />
      <Stat value="04:12" label="elapsed" />
    </div>
  ),
};

export const Start: Story = {
  args: { value: '87%', label: 'battery', align: 'start' },
};
