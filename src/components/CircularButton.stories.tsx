import type { Meta, StoryObj } from '@storybook/react-vite';

import { CircularButton } from './CircularButton';

const meta = {
  component: CircularButton,
  args: { size: 'md' },
} satisfies Meta<typeof CircularButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};