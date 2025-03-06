import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import Nest from './Nest';

const meta: Meta<typeof Nest> = {
  component: Nest,
  render: (args ) => (
    <Nest {...args}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          inlineSize: '100%',
          blockSize: '300px',
          backgroundColor: 'lightblue',
          color: 'white',
          fontSize: '24px',
          fontWeight: 'bold',
          borderRadius: '5px',
        }}
      >
        Nested
      </div>
    </Nest>
  ),
};

export default meta;

type Story = StoryObj<typeof Nest>;

export const Default: Story = {
  args: {},
};
