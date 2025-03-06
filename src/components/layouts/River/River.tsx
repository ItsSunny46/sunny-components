import * as React from 'react';
import { riverStyles } from './River.css';
import { FlexAlignType } from '../../../types';

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

interface RiverProps extends React.PropsWithChildren {
  flow?: 'v' | 'h' | 'vertical' | 'horizontal';
  align?: FlexAlignType;
  space?: string;
  boxStyles?: {
    bgColor?: string;
    padding?: string;
    border?: string;
    borderRadius?: string;
  };
}

const River: React.FC<RiverProps> = ({
  children,
  flow = 'h',
  align = 'center',
  space,
  // boxStyles,
}) => {
  const normalizedFLow = normalizeFlow(flow);

  return (
    <div
      style={{ '--space': space } as React.CSSProperties}
      className={riverStyles({ flow: normalizedFLow, align })}
    >
      {children}
    </div>
  );
};

export default River;
