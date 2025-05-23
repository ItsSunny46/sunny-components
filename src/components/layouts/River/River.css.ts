import { recipe } from '@vanilla-extract/recipes';

const RiverStyles = recipe({
  base: {
    display: 'flex',
    inlineSize: '100%',
    gap: 'var(--space, 20px)',
  },
  variants: {
    flow: {
      horizontal: { flexDirection: 'row' },
      vertical: { flexDirection: 'column' },
    },
    align: {
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
  },
});

export { RiverStyles };
