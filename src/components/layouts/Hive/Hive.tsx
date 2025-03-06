import * as React from 'react';
import { hiveStyles, hiveCellStyles } from './Hive.css';

interface HiveProps extends React.PropsWithChildren {
  maxHiveWidth?: string;
  space?: string;
  minCellWidth?: string;
  columnsCount?: number;
  squareCells?: boolean;
}

const Hive: React.FC<HiveProps> = ({
  children,
  maxHiveWidth,
  space,
  columnsCount,
  minCellWidth,
  squareCells,
}) => {
  return (
    <div
      style={
        {
          '--maxWidth': maxHiveWidth,
          '--space': space,
          '--minCellWidth': minCellWidth,
          '--columnsCount': columnsCount || 'auto-fit',
        } as React.CSSProperties
      }
      className={hiveStyles({ structure: columnsCount ? 'rigid' : 'fluid' })}
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
