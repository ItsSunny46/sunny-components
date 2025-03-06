import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import Beach from './Beach';

const meta: Meta<typeof Beach> = {
  component: Beach,
};

export default meta;

type Story = StoryObj<typeof Beach>;

export const Default: Story = {
  args: {
    shoreSide: 'left',
    sandWidth: '150px',
    sandSlot: (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          inlineSize: '100%',
          blockSize: '300px',
        }}
      >
        Sand
      </div>
    ),
    waterSlot: (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          inlineSize: '100%',
          blockSize: '300px',
        }}
      >
        Water
      </div>
    ),
    riverMinWidth: '50%',
    space: '20px',
  },
};
