import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import River from './River';
import { BoxStylesParams } from '../../../styles/boxStyles';
import { boxStyleArgTypes } from '../../../stories';

type StoryProps = React.ComponentProps<typeof River> & {
  itemsAmount: number;
} & BoxStylesParams;

const meta: Meta<StoryProps> = {
  component: River,
  argTypes: { ...boxStyleArgTypes },
  render: ({
    itemsAmount = 10,
    padding,
    bgColor,
    borderColor,
    borderRadius,
    borderSize,
    ...args
  }) => (
    <River
      {...args}
      boxStyles={{
        padding: padding,
        bgColor: bgColor,
        borderColor: borderColor,
        borderRadius: borderRadius,
        borderSize: borderSize,
      }}
    >
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
