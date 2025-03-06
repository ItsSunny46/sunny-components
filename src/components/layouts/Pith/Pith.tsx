import * as React from 'react';
import { PithStyles } from './Pith.css';

interface PithProps extends React.PropsWithChildren {
  centerSelf?: boolean;
  centerContent?: boolean;
  maxWidth?: string;
}

const Pith: React.FC<PithProps> = ({
  children,
  centerSelf,
  centerContent,
  maxWidth,
}) => (
  <div
    style={{ '--maxWidth': maxWidth } as React.CSSProperties}
    className={PithStyles({ centerSelf, centerContent })}
  >
    {children}
  </div>
);

export default Pith;
