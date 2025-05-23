import * as React from 'react';
import { LayerStyles, StratumStyles } from './Stratum.css';
import { StratumProps } from './Stratum.types';
import { getBoxStyles, getBoxVars } from '../../../styles/boxStyles';

const Stratum: React.FC<StratumProps> = ({
  children,
  maxWidth,
  align,
  boxStyles,
}) => {
  const hasBoxStyles = !!boxStyles;
  const boxVars = hasBoxStyles ? getBoxVars(boxStyles) : {};
  return (
    <div
      style={{ '--maxWidth': maxWidth, ...boxVars } as React.CSSProperties}
      className={`${StratumStyles} ${getBoxStyles(hasBoxStyles)}`}
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
};

export default Stratum;
