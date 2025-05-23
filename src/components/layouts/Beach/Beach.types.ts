import { BoxStylesParams } from '../../../styles/boxStyles';

interface BeachProps {
  space?: string;
  sandWidth: string;
  shoreSide: 'left' | 'right';
  riverMinWidth: string;
  sandSlot: React.ReactNode;
  waterSlot: React.ReactNode;
  boxStyles?: BoxStylesParams;
}

export { BeachProps };
