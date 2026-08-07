import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card } from './Card'
import { Button } from './Button'

const meta = {
  component: Card,
  args: {
    children: 'Card content goes here.',
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithButton: Story = {
  args: {
    children: (
      <>
        <p className="text-sm">Some card content.</p>
        <div className="mt-4 flex gap-2">
          <Button variant="solid">Save</Button>
          <Button variant="outline">Cancel</Button>
        </div>
      </>
    ),
  },
}