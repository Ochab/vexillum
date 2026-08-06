// src/components/TailwindCheck.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = { title: 'Debug/Tailwind' } satisfies Meta
export default meta

export const Check: StoryObj = {
  render: () => (
    <div className="rounded-lg bg-blue-500 p-4 text-white">
      Tailwind is working
    </div>
  ),
}