import { getPixel } from "@globals/helpers/getPixel";
import { ImageBackground } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(ImageBackground)`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.backgroundPage};
    align-items: center;
    padding: 0 ${getPixel.sizeHorizontal(52)}px;
  `}
`;
