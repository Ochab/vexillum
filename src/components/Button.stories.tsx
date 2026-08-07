import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'

import { Button } from './Button'

const TONES = ['brand', 'accent', 'info', 'success', 'warning', 'danger', 'neutral'] as const
const VARIANTS = ['solid', 'outline', 'soft' ] as const
const SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as const

const meta = {
  component: Button,
  args: {
    label: 'Label',
    variant: 'solid',
    tone: 'brand',
    size: 'md',
    onClick: fn(),
  },
  argTypes: {
    // Declared explicitly: variant and tone live in a discriminated union,
    // which react-docgen flattens to `string`. Without these they render
    // as text inputs.
    variant: { control: 'select', options: VARIANTS },
    tone: { control: 'select', options: TONES },
    size: { control: 'inline-radio', options: SIZES },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    className: { table: { disable: true } },
  },
  parameters: {
    // ButtonHTMLAttributes drags in every DOM handler. Show only what matters.
    controls: { include: ['label', 'variant', 'tone', 'size', 'disabled'] },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

/* Playground. Everything else below is a fixed matrix. */
export const Default: Story = {}

export const Variants: Story = {
  parameters: { controls: { include: ['tone', 'size'] } },
  render: (args) => (
    <div className="flex items-center gap-3">
      {VARIANTS.map((variant) => (
        <Button key={variant} {...args} variant={variant} label={variant} />
      ))}
    </div>
  ),
}

export const Tones: Story = {
  parameters: { controls: { include: ['variant', 'size'] } },
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      {TONES.map((tone) => (
        <Button key={tone} {...args} tone={tone} label={tone} />
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  parameters: { controls: { include: ['variant', 'tone'] } },
  render: (args) => (
    <div className="flex items-center gap-3">
      {SIZES.map((size) => (
        <Button key={size} {...args} size={size} label={size} />
      ))}
    </div>
  ),
}