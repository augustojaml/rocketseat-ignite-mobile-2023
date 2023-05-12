import { ColorsProps, FontWeightProps, SizesProps } from "@globals/styles";
import { Text, TextProps } from "react-native";
import styled, { css } from "styled-components/native";

interface TypographyProps extends TextProps {
  weight?: FontWeightProps;
  size?: SizesProps;
  color?: ColorsProps;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  lineHeight?: number;
  textAlign?: "auto" | "center" | "justify" | "left" | "right";
}

export const Typography = styled(Text)<TypographyProps>`
  ${({
    theme,
    weight,
    size,
    color,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    lineHeight,
    textAlign,
  }) => css`
    font-family: ${theme.fonts[weight ?? "regular"]};
    font-size: ${theme.size[size ?? "text-base"]};
    color: ${theme.colors[color || "gray900"]};
    margin-top: ${marginTop ?? 0}px;
    margin-bottom: ${marginBottom ?? 0}px;
    margin-left: ${marginLeft ?? 0}px;
    margin-right: ${marginRight ?? 0}px;
    text-align: ${textAlign ?? "left"};
    ${lineHeight &&
    css`
      line-height: ${lineHeight}px;
    `}
  `}
`;
