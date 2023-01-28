import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      green1: string;
      green2: string;
      green3: string;
      green4: string;
      green5: string;

      blue1: string;
      blue2: string;
      blue3: string;
      blue4: string;
      blue5: string;

      background: string;
      cardBg: string;
      text: string;
    };
  }
}
