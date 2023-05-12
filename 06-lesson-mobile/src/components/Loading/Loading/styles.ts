import { getPixel } from "@globals/helpers/getPixel";
import { theme } from "@globals/styles";
import styled, { css } from "styled-components/native";

interface ContainerProps {
  fullWidth?: boolean;
  padding?: number;
}

export const Container = styled.View<ContainerProps>`
  ${({ fullWidth, padding }) => css`
    background-color: ${theme.colors.backgroundPage};
    padding: ${getPixel.sizeHorizontal(padding ?? 24)}px;
    align-items: center;
    justify-content: center;
    ${fullWidth &&
    css`
      flex: 1;
    `}
  `}
`;
