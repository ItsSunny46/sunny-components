import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import Nest from './Nest';
import { BoxStylesParams } from '../../../styles/boxStyles';
import { boxStyleArgTypes } from '../../../stories';

type StoryProps = React.ComponentProps<typeof Nest> & BoxStylesParams;

const meta: Meta<StoryProps> = {
  component: Nest,
  argTypes: { ...boxStyleArgTypes },
  render: ({
    padding,
    bgColor,
    borderColor,
    borderRadius,
    borderSize,
    ...args
  }) => (
    <Nest
      {...args}
      boxStyles={{
        padding: padding,
        bgColor: bgColor,
        borderColor: borderColor,
        borderRadius: borderRadius,
        borderSize: borderSize,
      }}
    >
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
