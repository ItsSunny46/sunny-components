import { recipe } from '@vanilla-extract/recipes';

const buttonStyles = recipe({
  base: {
    all: 'unset',
    boxSizing: 'border-box',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    cursor: 'pointer',
    userSelect: 'none',
  },
  variants: {
    size: {
      s: {
        gap: '2.5px',
        padding: '5px 10px',
      },
      m: {
        gap: '5px',
        padding: '10px 20px',
      },
      l: {
        gap: '7.5px',
        padding: '15px 30px',
      },
    },
    form: {
      round: {},
      sharp: {
        borderRadius: '0',
      },
    },
    fill: {
      solid: {
        backgroundColor: 'var(--bgColor)',
        color: 'var(--textColor)',
        border: '2px solid transparent',
        ':hover': {
          backgroundColor: 'var(--hoverBgColor)',
          color: 'var(--hoverTextColor)',
        },
        ':focus': {
          border: '2px solid var(--hoverTextColor)',
        },
      },
      outline: {
        backgroundColor: 'transparent',
        border: '2px solid var(--textColor)',
        color: 'var(--textColor)',
        ':hover': {
          backgroundColor: 'var(--hoverBgColor)',
          color: 'var(--hoverTextColor)',
          border: '2px solid var(--hoverTextColor)',
        },
        ':focus': {
          color: 'var(--hoverTextColor)',
          border: '2px solid var(--hoverTextColor)',
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        border: 'none',
        color: 'var(--textColor)',
        ':hover': {
          backgroundColor: 'var(--hoverBgColor)',
          color: 'var(--hoverTextColor)',
        },
        ':focus': {
          backgroundColor: 'var(--hoverBgColor)',
        },
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        form: 'round',
        size: 's',
      },
      style: {
        borderRadius: '10px',
      },
    },
    {
      variants: {
        form: 'round',
        size: 'm',
      },
      style: {
        borderRadius: '20px',
      },
    },
    {
      variants: {
        form: 'round',
        size: 'l',
      },
      style: {
        borderRadius: '30px',
      },
    },
  ],
});

export { buttonStyles };
