import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import Pith from './Pith';

const meta: Meta<typeof Pith> = {
  component: Pith,
  render: (args) => (
    <div
      style={{
        inlineSize: '100%',
        blockSize: '200px',
        backgroundColor: 'blanchedalmond',
      }}
    >
      <Pith {...args}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            inlineSize: '100px',
            blockSize: '100px',
            backgroundColor: 'olive',
          }}
        >
          <span>Content</span>
        </div>
      </Pith>
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof Pith>;

export const Default: Story = {
  args: {},
};
