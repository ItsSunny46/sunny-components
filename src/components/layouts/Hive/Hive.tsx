import * as React from 'react';
import { hiveStyles, hiveCellStyles } from './Hive.css';
import { HiveProps } from './Hive.types';
import { getBoxStyles, getBoxVars } from '../../../styles/boxStyles';

const Hive: React.FC<HiveProps> = ({
  children,
  maxHiveWidth,
  space,
  columnsCount,
  minCellWidth,
  squareCells,
  boxStyles,
}) => {
  const hasBoxStyles = !!boxStyles;
  const boxVars = hasBoxStyles ? getBoxVars(boxStyles) : {};

  return (
    <div
      style={
        {
          '--maxWidth': maxHiveWidth,
          '--space': space,
          '--minCellWidth': minCellWidth,
          '--columnsCount': columnsCount || 'auto-fit',
          ...boxVars,
        } as React.CSSProperties
      }
      className={`${hiveStyles({ structure: columnsCount ? 'rigid' : 'fluid' })} ${getBoxStyles(hasBoxStyles)}`}
    >
      {squareCells
        ? React.Children.map(children, (child, i) => {
            return (
              <div key={i} className={hiveCellStyles}>
                {child}
              </div>
            );
          })
        : children}
    </div>
  );
};

export default Hive;
