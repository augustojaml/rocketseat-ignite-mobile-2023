import { colors } from "./theme/colors";
import { fonts } from "./theme/fonts";
import { size } from "./theme/sizes";

export const theme = {
  colors: colors,
  fonts: fonts.montserrat,
  size: size,
};

export type ColorsProps = keyof typeof colors;
export type SizesProps = keyof typeof size;
export type FontWeightProps = keyof typeof fonts.inter | keyof typeof fonts.montserrat | keyof typeof fonts.poppins;
