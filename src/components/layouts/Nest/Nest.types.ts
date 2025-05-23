import * as React from 'react';
import { BoxStylesParams } from '../../../styles/boxStyles';

interface NestProps extends React.PropsWithChildren {
  margin?: string;
  padding?: string;
  border?: string;
  background?: string;
  maxWidth?: string;
  boxStyles?: BoxStylesParams;
}

export { NestProps };
