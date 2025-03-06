import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import Stratum from './Stratum';

const colors = ['burlywood', 'olive', 'darkgoldenrod', 'indianred'];

type StoryProps = React.ComponentProps<typeof Stratum> & {
  itemsAmount: number;
};

const meta: Meta<StoryProps> = {
  component: Stratum,
  render: ({ itemsAmount = 10, ...args }) => (
    <Stratum {...args}>
      {Array.from({ length: itemsAmount }, (_, i) => {
        const step = 1 / (itemsAmount + 1);

        return (
          <div
            key={i}
            style={{
              '--maxSize': 'var(--maxWidth, 90vh)',
              maxInlineSize: `calc(var(--maxSize) - ${step * i} * var(--maxSize))`,
              inlineSize: '100%',
              blockSize: `calc(var(--maxSize) - ${step * i} * var(--maxSize))`,
              paddingInlineStart: '2px',
              backgroundColor: colors[i % colors.length],
            } as React.CSSProperties}
          >
            item {i + 1}
          </div>
        );
      })}
    </Stratum>
  ),
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    itemsAmount: 10,
  },
};
