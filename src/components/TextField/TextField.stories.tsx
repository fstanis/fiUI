import type { Meta, StoryObj } from '@storybook/preact';
import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  args: { placeholder: 'width in px…' },
  argTypes: {
    invalid: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Placeholder: Story = {};
export const WithValue: Story = { args: { value: '2048' } };
export const WithSuffix: Story = { args: { value: '1920', suffix: 'px' } };
export const Invalid: Story = { args: { value: 'abc', invalid: true } };
export const Disabled: Story = { args: { value: '1024', disabled: true } };
