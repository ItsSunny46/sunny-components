import * as React from 'react';
import { NestStyles } from './Nest.css';
import { NestProps } from './Nest.types';
import { getBoxStyles, getBoxVars } from '../../../styles/boxStyles';

const Nest: React.FC<NestProps> = ({
  children,
  margin,
  padding,
  border,
  background,
  maxWidth,
  boxStyles,
}) => {
  const hasBoxStyles = !!boxStyles;
  const boxVars = hasBoxStyles ? getBoxVars(boxStyles) : {};

  return (
    <div
      style={
        {
          '--margin': margin || '0',
          '--padding': padding || '0',
          '--border': border || 'none',
          '--background': background || 'none',
          '--maxWidth': maxWidth || 'unset',
          ...boxVars,
        } as React.CSSProperties
      }
      className={`${NestStyles} ${getBoxStyles(hasBoxStyles)}`}
    >
      {children}
    </div>
  );
};

export default Nest;
