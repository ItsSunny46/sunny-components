import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import Hive from './Hive';

type StoryProps = React.ComponentProps<typeof Hive> & {
  itemsAmount: number;
};

const meta: Meta<StoryProps> = {
  component: Hive,
  render: ({ itemsAmount = 10, ...args }) => (
    <Hive {...args}>
      {Array.from({ length: itemsAmount }, (_, i) => (
        <div
          key={i}
          style={{
            maxInlineSize: '200px',
            inlineSize: '100%',
            blockSize: '100%',
            backgroundColor: 'olive',
          }}
        >
          Item {i + 1}
        </div>
      ))}
    </Hive>
  ),
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    maxHiveWidth: '600px',
    minCellWidth: '50px',
    space: '20px',
    itemsAmount: 10,
  },
};
