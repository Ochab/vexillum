import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge, TONES } from './Badge';

const meta = {
  component: Badge,
  args: {
    label: 'Label',
    tone: 'info',
    showDot: true,
  },
  argTypes: {
    // Renders tone as a dropdown instead of a text field. TONES imports from Badge.tsx.
    tone: { control: 'select', options: TONES },
  },
  parameters: {
    // HTMLAttributes drags in className and every DOM handler.
    controls: { include: ['label', 'tone', 'showDot'] },
  },
} satisfies Meta<typeof Badge>

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Tones: Story = {
  parameters: { controls: { include: ['showDot'] } },
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      {TONES.map((tone) => (
        <Badge key={tone} {...args} tone={tone} label={tone} />
      ))}
    </div>
  )
}