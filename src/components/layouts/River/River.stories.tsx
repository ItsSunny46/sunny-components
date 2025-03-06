import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import River from './River';

type StoryProps = React.ComponentProps<typeof River> & { itemsAmount: number };

const meta: Meta<StoryProps> = {
  component: River,
  render: ({ itemsAmount = 10, ...args }) => (
    <River {...args}>
      {Array.from({ length: itemsAmount }, (_, i) => (
        <p key={i}>Item {i + 1}</p>
      ))}
    </River>
  ),
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    flow: 'h',
    align: 'center',
    space: '20px',
    itemsAmount: 10,
  },
};
