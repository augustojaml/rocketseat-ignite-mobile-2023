import { theme } from "@globals/styles";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components/native";

interface StyledProviderProps {
  children: ReactNode;
}

export function StyledProvider({ children }: StyledProviderProps) {
  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
}
