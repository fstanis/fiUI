import type { Meta, StoryObj } from '@storybook/preact';
import { Button } from '../Button';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Confirmation: Story = {
  args: {
    isOpen: true,
    title: 'delete these items?',
    children: 'The selected items will be removed permanently. This cannot be undone.',
    actions: (
      <>
        <Button variant="secondary">cancel</Button>
        <Button>delete</Button>
      </>
    ),
  },
};

export const MessageOnly: Story = {
  args: {
    isOpen: true,
    title: 'connection lost',
    children: 'A dialog without actions, dismissed by clicking the backdrop or pressing Escape.',
  },
};
