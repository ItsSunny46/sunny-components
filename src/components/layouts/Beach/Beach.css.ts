import { style } from '@vanilla-extract/css';

const beachStyles = style({
  display: 'flex',
  gap: 'var(--space, 0)',
  flexWrap: 'wrap',
  inlineSize: '100%',
});

const sandStyles = style({
  flexBasis: 'var(--sandWidth, 100px)',
  flexGrow: 1,
  backgroundColor: 'sandybrown',
});

const waterStyles = style({
  flexBasis: 0,
  flexGrow: 9999,
  minInlineSize: 'var(--riverMinWidth, 50%)',
  backgroundColor: 'blue',
});

export { beachStyles, sandStyles, waterStyles };
