import "styled-components";
import theme from "./common/theme";

// extend original module declarations
declare module 'styled-components' {
    type Theme = typeof theme;

    // rely on type inference
    export interface DefaultTheme extends Theme {}
}