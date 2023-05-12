import { getPixel } from "@globals/helpers/getPixel";
import styled, { css } from "styled-components/native";
import { ButtonTouchable } from "../ButtonTouchable";
import { ColorsProps } from "@globals/styles";

interface ContainerProps {
  active?: boolean;

  background?: ColorsProps;
  borderColor?: ColorsProps;
  borderWidth?: number;
  inactiveBackground?: ColorsProps;
  inactiveBorderColor?: ColorsProps;

  height?: number;
  rounded?: boolean;

  disabled?: boolean;
  fullWidth?: boolean;
  width?: number | string;
  marginLeft?: number;
  marginRight?: number;
  paddingHorizontal?: number;
}

export const Container = styled(ButtonTouchable)<ContainerProps>`
  ${({
    theme,
    background,
    height = 50,
    active,
    inactiveBackground,
    inactiveBorderColor,
    borderColor,
    borderWidth,
    fullWidth,
    paddingHorizontal,
    width,
    rounded,
    marginLeft,
    marginRight,
  }) => css`
    align-items: center;
    justify-content: center;
    flex-direction: row;
    border-width: ${borderWidth ?? 1}px;
    background-color: ${theme.colors[background ?? "primary900"]};
    border-color: ${theme.colors[
      borderColor ? borderColor : background ?? "primary900"
    ]};
    height: ${getPixel.height(height)}px;
    border-radius: ${getPixel.width(8)}px;
    /* align-self: ${fullWidth ? "auto" : "flex-start"}; */
    padding: 0 ${getPixel.sizeHorizontal(paddingHorizontal ?? 16)}px;
    margin-left: ${getPixel.sizeHorizontal(marginLeft ?? 0)}px;
    margin-right: ${getPixel.sizeHorizontal(marginRight ?? 0)}px;

    ${width &&
    css`
      width: ${typeof width === "string" ? width : width + "px"};
    `}

    ${rounded &&
    css`
      border-radius: ${height / 2}px;
    `}

    ${!active &&
    css`
      background-color: ${theme.colors[inactiveBackground ?? "primary300"]};
      border-color: ${theme.colors[inactiveBorderColor ?? "primary300"]};
    `}
  `}
`;
