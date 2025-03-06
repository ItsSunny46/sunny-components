import { recipe } from '@vanilla-extract/recipes';

const PithStyles = recipe({
  base: {
    inlineSize: '100%',
    maxInlineSize: 'var(--maxWidth)',
  },
  variants: {
    centerSelf: {
      true: {
        margin: '0 auto',
      },
      false: {
        margin: 'unset',
      },
    },
    centerContent: {
      true: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      false: {
        display: 'block',
      },
    },
  },
});

export { PithStyles };
