import * as React from 'react';
import { BoxStylesParams } from '../../../styles/boxStyles';

interface PithProps extends React.PropsWithChildren {
  centerSelf?: boolean;
  centerContent?: boolean;
  maxWidth?: string;
  boxStyles?: BoxStylesParams;
}

export { PithProps };
