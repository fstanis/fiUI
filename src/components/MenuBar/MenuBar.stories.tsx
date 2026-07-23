import type { Meta, StoryObj } from '@storybook/preact';
import { MenuBar } from './MenuBar';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';

const meta: Meta<typeof MenuBar> = {
  title: 'Chrome/MenuBar',
  component: MenuBar,
};

export default meta;
type Story = StoryObj<typeof MenuBar>;

export const Default: Story = {
  render: () => (
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
  ),
};
