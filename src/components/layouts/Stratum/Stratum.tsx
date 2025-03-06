import * as React from 'react';
import { FlexAlignType } from '../../../types';
import { LayerStyles, StratumStyles } from './Stratum.css';

interface StratumProps extends React.PropsWithChildren {
  maxWidth?: string;
  align?: { vertical?: FlexAlignType; horizontal?: FlexAlignType }[];
}

const Stratum: React.FC<StratumProps> = ({ children, maxWidth, align }) => (
  <div
    style={{ '--maxWidth': maxWidth } as React.CSSProperties}
    className={StratumStyles}
  >
    {React.Children.map(children, (child, i) => {
      return (
        <div
          key={i}
          className={LayerStyles({
            verticalAlign: align ? align[i].vertical : 'center',
            horizontalAlign: align ? align[i].horizontal : 'center',
          })}
        >
          {child}
        </div>
      );
    })}
  </div>
);

export default Stratum;
