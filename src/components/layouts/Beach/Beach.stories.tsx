import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import Beach from './Beach';
import { boxStyleArgTypes } from '../../../stories';
import { BoxStylesParams } from '../../../styles/boxStyles';

type StoryProps = React.ComponentProps<typeof Beach> & BoxStylesParams;

const meta: Meta<StoryProps> = {
  component: Beach,
  argTypes: { ...boxStyleArgTypes },
  render: ({
    padding,
    bgColor,
    borderColor,
    borderRadius,
    borderSize,
    ...args
  }) => (
    <Beach
      {...args}
      boxStyles={{
        padding: padding,
        bgColor: bgColor,
        borderColor: borderColor,
        borderRadius: borderRadius,
        borderSize: borderSize,
      }}
    />
  ),
};

export default meta;

type Story = StoryObj<StoryProps>;

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
