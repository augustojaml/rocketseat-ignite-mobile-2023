import { ReactNode } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyledProvider } from "@globals/providers/StyledProvider";

interface IChildrenNode {
  children: ReactNode;
}

export function AppProvider({ children }: IChildrenNode) {
  return (
    <>
      <StyledProvider>
        <SafeAreaProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>{children}</NavigationContainer>
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </StyledProvider>
    </>
  );
}
