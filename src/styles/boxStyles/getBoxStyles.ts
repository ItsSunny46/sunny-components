import { BoxStyles } from './boxStyles.css';

interface BoxStylesParams {
  bgColor?: string;
  padding?: string;
  borderSize?: string;
  borderRadius?: string;
  borderColor?: string;
}

interface BoxStylesVars {
  '--box-bgColor': string;
  '--box-padding': string;
  '--box-borderSize': string;
  '--box-borderRadius': string;
  '--box-borderColor': string;
}

const getBoxVars = ({
  bgColor,
  padding,
  borderSize,
  borderRadius,
  borderColor,
}: BoxStylesParams): BoxStylesVars => ({
  '--box-bgColor': bgColor || 'transparent',
  '--box-padding': padding || '0',
  '--box-borderSize': borderSize || '0',
  '--box-borderRadius': borderRadius || '0',
  '--box-borderColor': borderColor || 'transparent',
});

const getBoxStyles = (hasInput: boolean) => (hasInput ? BoxStyles : '');

export { BoxStylesParams, getBoxVars, getBoxStyles };
