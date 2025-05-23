import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import Pith from './Pith';
import { BoxStylesParams } from '../../../styles/boxStyles';
import { boxStyleArgTypes } from '../../../stories';

type StoryProps = React.ComponentProps<typeof Pith> & BoxStylesParams;

const meta: Meta<StoryProps> = {
  component: Pith,
  argTypes: { ...boxStyleArgTypes },
  render: ({
    padding,
    bgColor,
    borderColor,
    borderRadius,
    borderSize,
    ...args
  }) => (
    <div
      style={{
        inlineSize: '100%',
        blockSize: '200px',
        backgroundColor: 'blanchedalmond',
      }}
    >
      <Pith
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

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {},
};
