import type { Meta, StoryObj } from '@storybook/preact';
import { Panel } from './Panel';
import { Text } from '../Text/Text';

const meta: Meta<typeof Panel> = {
  title: 'Components/Panel',
  component: Panel,
  args: { padded: true },
};

export default meta;
type Story = StoryObj<typeof Panel>;

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: 420 }}>
      <Panel {...args}>
        <Text variant="heading">panel title</Text>
        <div style={{ marginTop: 8 }}>
          <Text variant="body" tone="muted">
            A raised, bordered surface for grouping related content.
          </Text>
        </div>
      </Panel>
    </div>
  ),
};
