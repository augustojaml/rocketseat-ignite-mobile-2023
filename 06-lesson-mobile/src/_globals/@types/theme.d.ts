import { theme } from "@globals/styles";
import "styled-components";

declare module "styled-components" {
  type ThemeType = typeof theme;
  export interface DefaultTheme extends ThemeType {}
}
