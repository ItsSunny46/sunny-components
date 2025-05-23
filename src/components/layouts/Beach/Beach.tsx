import * as React from 'react';
import { beachStyles, sandStyles, waterStyles } from './Beach.css';
import { BeachProps } from './Beach.types';
import { getBoxStyles, getBoxVars } from '../../../styles/boxStyles';

const Beach: React.FC<BeachProps> = ({
  shoreSide,
  sandWidth,
  sandSlot,
  waterSlot,
  riverMinWidth,
  space,
  boxStyles,
}) => {
  const hasBoxStyles = !!boxStyles;
  const boxVars = hasBoxStyles ? getBoxVars(boxStyles) : {};
  return (
    <div
      style={{ '--space': space, ...boxVars } as React.CSSProperties}
      className={`${beachStyles} ${getBoxStyles(hasBoxStyles)}`}
    >
      {shoreSide === 'left' && (
        <div
          style={{ '--sandWidth': sandWidth } as React.CSSProperties}
          className={sandStyles}
        >
          {sandSlot}
        </div>
      )}
      <div
        style={{ '--riverMinWidth': riverMinWidth } as React.CSSProperties}
        className={waterStyles}
      >
        {waterSlot}
      </div>
      {shoreSide === 'right' && (
        <div
          style={{ '--sandWidth': sandWidth } as React.CSSProperties}
          className={sandStyles}
        >
          {sandSlot}
        </div>
      )}
    </div>
  );
};

export default Beach;
