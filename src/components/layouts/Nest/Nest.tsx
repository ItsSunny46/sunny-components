import * as React from 'react';
import { NestStyles } from './Nest.css';

interface NestProps extends React.PropsWithChildren {
  margin?: string;
  padding?: string;
  border?: string;
  background?: string;
  maxWidth?: string;
}

const Nest: React.FC<NestProps> = ({
  children,
  margin,
  padding,
  border,
  background,
  maxWidth,
}) => (
  <div
    style={
      {
        '--margin': margin || '0',
        '--padding': padding || '0',
        '--border': border || 'none',
        '--background': background || 'none',
        '--maxWidth': maxWidth || 'unset',
      } as React.CSSProperties
    }
    className={NestStyles}
  >
    {children}
  </div>
);

export default Nest;
