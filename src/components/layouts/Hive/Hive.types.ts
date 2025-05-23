import * as React from 'react';
import { BoxStylesParams } from '../../../styles/boxStyles';

interface HiveProps extends React.PropsWithChildren {
  maxHiveWidth?: string;
  space?: string;
  minCellWidth?: string;
  columnsCount?: number;
  squareCells?: boolean;
  boxStyles?: BoxStylesParams;
}

export { HiveProps };
