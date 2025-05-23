import * as React from 'react';
import { FlexAlignType } from '../../../types';
import { BoxStylesParams } from '../../../styles/boxStyles';

interface StratumProps extends React.PropsWithChildren {
  maxWidth?: string;
  align?: { vertical?: FlexAlignType; horizontal?: FlexAlignType }[];
  boxStyles?: BoxStylesParams;
}

export { StratumProps };
