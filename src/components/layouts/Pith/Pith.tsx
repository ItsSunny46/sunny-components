import * as React from 'react';
import { PithStyles } from './Pith.css';
import { PithProps } from './Pith.types';
import { getBoxStyles, getBoxVars } from '../../../styles/boxStyles';

const Pith: React.FC<PithProps> = ({
  children,
  centerSelf,
  centerContent,
  maxWidth,
  boxStyles,
}) => {
  const hasBoxStyles = !!boxStyles;
  const boxVars = hasBoxStyles ? getBoxVars(boxStyles) : {};

  return (
    <div
      style={{ '--maxWidth': maxWidth, ...boxVars } as React.CSSProperties}
      className={`${PithStyles({ centerSelf, centerContent })} ${getBoxStyles(hasBoxStyles)}`}
    >
      {children}
    </div>
  );
};

export default Pith;
