import { ActivityIndicator } from "react-native";
import { Container } from "./styles";
import { useTheme } from "styled-components";
import { theme } from "@globals/styles";

interface LoadingProps {
  fullWidth?: boolean;
  padding?: number;
}

export function Loading({ fullWidth, padding }: LoadingProps) {
  return (
    <>
      <Container fullWidth={fullWidth} padding={padding}>
        <ActivityIndicator size="small" color={theme.colors.gray100} />
      </Container>
    </>
  );
}
