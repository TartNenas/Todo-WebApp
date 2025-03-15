import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      text: string;
    };
    spacing: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    borderRadius: {
      md: string;
      lg: string;
    };
  }
} 