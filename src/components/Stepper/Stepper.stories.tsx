import type { Meta, StoryObj } from '@storybook/preact';
import { useState } from 'preact/hooks';
import { Stepper } from './Stepper';

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
};

export default meta;
type Story = StoryObj<typeof Stepper>;

function PaceDemo() {
  const [pace, setPace] = useState(6);
  return (
    <Stepper
      value={pace.toFixed(1)}
      onDecrement={() => setPace((current) => Math.max(4, current - 0.5))}
      onIncrement={() => setPace((current) => Math.min(9, current + 0.5))}
      decrementLabel="slower"
      incrementLabel="faster"
    />
  );
}

function DurationDemo() {
  const [minutes, setMinutes] = useState(10);
  return (
    <div style={{ '--fi-stepper-value-width': '72px' }}>
      <Stepper
        value={minutes > 30 ? 'non stop' : `${minutes} min`}
        onDecrement={() => setMinutes((current) => Math.max(5, current - 5))}
        onIncrement={() => setMinutes((current) => Math.min(35, current + 5))}
      />
    </div>
  );
}

export const Numeric: Story = { render: () => <PaceDemo /> };
export const WiderValue: Story = { render: () => <DurationDemo /> };

export const Disabled: Story = {
  args: { value: '6.0', onDecrement: () => {}, onIncrement: () => {}, disabled: true },
};
