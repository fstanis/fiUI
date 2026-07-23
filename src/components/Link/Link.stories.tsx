import type { Meta, StoryObj } from '@storybook/preact';
import { Link } from './Link';

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  args: { children: 'download', href: '#', variant: 'default' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['default', 'accent'] },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {};
export const Accent: Story = { args: { variant: 'accent', children: 'strip metadata →' } };
