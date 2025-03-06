import * as React from 'react';
import { beachStyles, sandStyles, waterStyles } from './Beach.css';

interface BeachProps {
  space: string;
  sandWidth: string;
  shoreSide: 'left' | 'right';
  riverMinWidth: string;
  sandSlot: React.ReactNode;
  waterSlot: React.ReactNode;
}

const Beach: React.FC<BeachProps> = ({
  shoreSide,
  sandWidth,
  sandSlot,
  waterSlot,
  riverMinWidth,
  space,
}) => (
  <div style={{ '--space': space } as React.CSSProperties} className={beachStyles}>
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

export default Beach;
