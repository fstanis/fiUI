import type { Meta, StoryObj } from '@storybook/preact';
import { useState } from 'preact/hooks';
import { Toolbar } from './Toolbar';
import { Button } from '../Button/Button';
import { SegmentedControl } from '../SegmentedControl/SegmentedControl';

const meta: Meta<typeof Toolbar> = {
  title: 'Chrome/Toolbar',
  component: Toolbar,
};

export default meta;
type Story = StoryObj<typeof Toolbar>;

function ToolbarDemo() {
  const [zoom, setZoom] = useState('fit');
  return (
    <Toolbar>
      <div style={{ display: 'flex', gap: 8 }}>
        <Button variant="toolbar">← prev</Button>
        <Button variant="toolbar">next →</Button>
      </div>
      <SegmentedControl
        label="zoom"
        value={zoom}
        onChange={setZoom}
        options={[
          { label: 'fit', value: 'fit' },
          { label: '100%', value: '100' },
          { label: '200%', value: '200' },
        ]}
      />
    </Toolbar>
  );
}

export const Default: Story = { render: () => <ToolbarDemo /> };
