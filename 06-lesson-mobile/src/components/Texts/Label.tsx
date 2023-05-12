import {ButtonTouchable} from '@components/Buttons/ButtonTouchable';
import {ColorsProps, FontWeightProps, SizesProps} from '@globals/styles/theme';
import {ReactNode} from 'react';
import {TouchableOpacityProps} from 'react-native';
import {Typography} from './Typography';

interface TouchableProps extends TouchableOpacityProps {
  weight?: FontWeightProps;
  size?: SizesProps;
  color?: ColorsProps;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  lineHeight?: number;
  textAlign?: 'auto' | 'center' | 'justify' | 'left' | 'right';
  numberOfLines?: number;
  onPress?: () => void;
  children: ReactNode;
}

export function Label({
  weight,
  size,
  color,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  lineHeight,
  textAlign,
  onPress,
  children,
  numberOfLines,
}: TouchableProps) {
  return (
    <>
      <ButtonTouchable onPress={onPress} disabled={!onPress}>
        <Typography
          weight={weight}
          size={size}
          color={color}
          marginTop={marginTop}
          marginBottom={marginBottom}
          marginLeft={marginLeft}
          marginRight={marginRight}
          lineHeight={lineHeight}
          textAlign={textAlign}
          numberOfLines={numberOfLines}>
          {children}
        </Typography>
      </ButtonTouchable>
    </>
  );
}
