import * as React from 'react';
import { RiverStyles } from './River.css';
import { RiverProps } from './River.types';
import { getBoxStyles, getBoxVars } from '../../../styles/boxStyles';

const normalizeFlow = (
  flow: 'h' | 'v' | 'horizontal' | 'vertical',
): 'horizontal' | 'vertical' => {
  const flowMap = {
    h: 'horizontal',
    v: 'vertical',
    horizontal: 'horizontal',
    vertical: 'vertical',
  } as const;

  return flowMap[flow];
};

const River: React.FC<RiverProps> = ({
  children,
  flow = 'h',
  align = 'center',
  space,
  boxStyles,
}) => {
  const normalizedFLow = normalizeFlow(flow);

  const hasBoxStyles = !!boxStyles;
  const boxVars = hasBoxStyles ? getBoxVars(boxStyles) : {};

  return (
    <div
      style={{ '--space': space, ...boxVars } as React.CSSProperties}
      className={`${RiverStyles({ flow: normalizedFLow, align })} ${getBoxStyles(hasBoxStyles)}`}
    >
      {children}
    </div>
  );
};

export default River;
