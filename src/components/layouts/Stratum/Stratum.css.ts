import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const StratumStyles = style({
  display: 'grid',
  maxInlineSize: 'var(--maxWidth)',
  inlineSize: '100%',
});

const LayerStyles = recipe({
  base: {
    gridArea: '1/1',
    display: 'flex',
    inlineSize: '100%',
    blockSize: '100%',
  },
  variants: {
    verticalAlign: {
      normal: { alignItems: 'normal' },
      stretch: { alignItems: 'stretch' },
      center: { alignItems: 'center' },
      flexStart: { alignItems: 'flex-start' },
      flexEnd: { alignItems: 'flex-end' },
      start: { alignItems: 'start' },
      end: { alignItems: 'end' },
      baseline: { alignItems: 'baseline' },
      initial: { alignItems: 'initial' },
      inherit: { alignItems: 'inherit' },
    },
    horizontalAlign: {
      normal: { justifyContent: 'normal' },
      stretch: { justifyContent: 'stretch' },
      center: { justifyContent: 'center' },
      flexStart: { justifyContent: 'flex-start' },
      flexEnd: { justifyContent: 'flex-end' },
      start: { justifyContent: 'start' },
      end: { justifyContent: 'end' },
      baseline: { justifyContent: 'baseline' },
      initial: { justifyContent: 'initial' },
      inherit: { justifyContent: 'inherit' },
    },
  },
});

export { StratumStyles, LayerStyles };
