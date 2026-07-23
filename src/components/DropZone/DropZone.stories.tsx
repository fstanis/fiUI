import type { Meta, StoryObj } from '@storybook/preact';
import { useState } from 'preact/hooks';
import { DropZone } from './DropZone';

const meta: Meta<typeof DropZone> = {
  title: 'Components/DropZone',
  component: DropZone,
};

export default meta;
type Story = StoryObj<typeof DropZone>;

function IdleDemo() {
  const [names, setNames] = useState<string[]>([]);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <DropZone hint="png · jpg · up to 50 files" onFiles={(files) => setNames(files.map((file) => file.name))} />
      {names.length > 0 && (
        <span style={{ fontSize: 13, color: 'var(--fi-ink-muted)' }}>added: {names.join(', ')}</span>
      )}
    </div>
  );
}

export const Idle: Story = { render: () => <IdleDemo /> };

export const Disabled: Story = {
  render: () => <DropZone disabled hint="png · jpg · up to 50 files" onFiles={() => {}} />,
};
