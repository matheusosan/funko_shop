import { CartProvider } from "../contexts/Context";
import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { light, dark } from "../styles/themes/themes";
import { useState } from "react";
import { Poppins } from "@next/font/google";

const poppins = Poppins ({
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <main className={poppins.className}>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </CartProvider>
      </ThemeProvider>
    </main>
  );
}
