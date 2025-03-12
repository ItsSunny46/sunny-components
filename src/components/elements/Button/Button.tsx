import * as React from 'react';
import { buttonStyles } from './Button.css';

interface ButtonProps extends React.PropsWithChildren {
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
  href?: string;
  target?: string;
  iconPosition?: 'left' | 'right';
  form?: 'round' | 'sharp';
  fill?: 'solid' | 'outline' | 'ghost';
  size?: 's' | 'm' | 'l';
  bgColor?: string;
  hoverBgColor?: string;
  textColor?: string;
  hoverTextColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  text,
  onClick,
  disabled,
  href,
  target,
  iconPosition,
  form = 'sharp',
  fill = 'solid',
  size ='m',
  bgColor = 'black',
  textColor = 'white',
  hoverBgColor = 'darkgray',
  hoverTextColor = 'lightgray',
}) => {
  const content = (
    <>
      {iconPosition === 'left' && children}
      {text}
      {iconPosition === 'right' && children}
    </>
  );
  return href ? (
    <a
      href={href}
      target={target}
      style={
        {
          '--bgColor': bgColor,
          '--textColor': textColor,
          '--hoverBgColor': hoverBgColor,
          '--hoverTextColor': hoverTextColor,
        } as React.CSSProperties
      }
      className={buttonStyles({ form, fill, size })}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      onClick={onClick}
    >
      {content}
    </a>
  ) : (
    <button
      onClick={onClick}
      disabled={disabled}
      style={
        {
          '--bgColor': bgColor,
          '--textColor': textColor,
          '--hoverBgColor': hoverBgColor,
          '--hoverTextColor': hoverTextColor,
        } as React.CSSProperties
      }
      className={buttonStyles({ form, fill, size })}
    >
      {content}
    </button>
  );
};

export default Button;
