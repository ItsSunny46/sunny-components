import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const hiveStyles = recipe({
  base: {
    display: 'grid',
    gap: 'var(--space, 0)',
    maxInlineSize: 'var(--maxWidth)',
    inlineSize: '100%',
  },
  variants: {
    structure: {
      rigid: {
        gridTemplateColumns:
          'repeat(var(--columnsCount), 1fr)',
      },
      fluid: {
        gridTemplateColumns:
          'repeat(var(--columnsCount), minmax(var(--minCellWidth), auto))',
      },
    },
  },
});

const hiveCellStyles = style({
  aspectRatio: '1 / 1',
});

export { hiveStyles, hiveCellStyles };
