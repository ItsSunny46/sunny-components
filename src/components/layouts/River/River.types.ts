import * as React from 'react';
import { FlexAlignType } from '../../../types';
import { BoxStylesParams } from '../../../styles/boxStyles';

interface RiverProps extends React.PropsWithChildren {
  flow?: 'v' | 'h' | 'vertical' | 'horizontal';
  align?: FlexAlignType;
  space?: string;
  boxStyles?: BoxStylesParams;
}

export { RiverProps };
