import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Button, TONES, VARIANTS, SIZES } from './Button'

const meta = {
  component: Button,
  args: {
    label: 'Label',
    variant: 'solid',
    tone: 'brand',
    size: 'md',
    disabled: false,
    onClick: fn(),
  },
  argTypes: {
    // Storybook can't infer these from the union type — without them it
    // renders text fields instead of dropdowns. Lists import from Button.tsx.
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

export const States: Story = {
  parameters: { controls: { include: ['tone', 'variant'] } },
  render: (args) => (
    <div className="flex items-center gap-3">
      <Button {...args} label="rest" />
      <Button {...args} label="hover" className="pseudo-hover" />
      <Button {...args} label="active" className="pseudo-active" />
      <Button {...args} label="focus" className="pseudo-focus-visible" />
      <Button {...args} label="disabled" disabled />
    </div>
  ),
}