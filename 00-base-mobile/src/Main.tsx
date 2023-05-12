import { Typography } from "@components/Texts/Typography";
import { AppProvider } from "@globals/providers";
import { Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export function Main() {
  return (
    <>
      <AppProvider>
        <Container>
          <Typography>MainScreen</Typography>
        </Container>
      </AppProvider>
    </>
  );
}
