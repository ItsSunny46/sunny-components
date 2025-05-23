import { style } from '@vanilla-extract/css';

const BoxStyles = style({
  backgroundColor: 'var(--box-bgColor)',
  padding: 'var(--box-padding)',
  border: 'var(--box-borderSize) solid var(--box-borderColor)',
  borderRadius: 'var(--box-borderRadius)',
});

export { BoxStyles };
