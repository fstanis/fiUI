import type { Meta, StoryObj } from '@storybook/preact';
import { useState } from 'preact/hooks';
import { MenuBar } from '../components/MenuBar/MenuBar';
import { Toolbar } from '../components/Toolbar/Toolbar';
import { StatusBar } from '../components/StatusBar/StatusBar';
import { Button } from '../components/Button/Button';
import { SegmentedControl } from '../components/SegmentedControl/SegmentedControl';
import { Text } from '../components/Text/Text';

const meta: Meta = {
  title: 'Patterns/App Chrome',
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj;

function ViewerWindowDemo() {
  const [zoom, setZoom] = useState('fit');
  return (
    <div
      style={{
        border: '1px solid var(--fi-border)',
        borderRadius: 8,
        overflow: 'hidden',
        margin: 24,
        background: 'var(--fi-surface-raised)',
      }}
    >
      <MenuBar>
        <Text variant="logo">
          imgvw<span style={{ color: 'var(--fi-accent)' }}>.sh</span>
        </Text>
        <div style={{ display: 'flex', gap: 20, fontSize: 13, color: 'var(--fi-ink-muted)' }}>
          <span style={{ color: 'var(--fi-ink)' }}>file</span>
          <span>edit</span>
          <span>view</span>
          <span>image</span>
          <span>tools</span>
          <span>help</span>
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <Button variant="primary">open…</Button>
        </div>
      </MenuBar>
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
      <div style={{ padding: 24, display: 'flex', justifyContent: 'center', background: 'var(--fi-background)' }}>
        <div
          style={{
            width: 480,
            height: 280,
            borderRadius: 6,
            background:
              'repeating-linear-gradient(45deg, var(--fi-placeholder-a), var(--fi-placeholder-a) 6px, var(--fi-placeholder-b) 6px, var(--fi-placeholder-b) 12px)',
          }}
        />
      </div>
      <StatusBar left="3 of 128 · 4000×3000 · 4.2 MB · fit (34%)" right="imgvw.sh" />
    </div>
  );
}

export const ViewerWindow: Story = { render: () => <ViewerWindowDemo /> };
