import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import CheckoutPage from "@/components/Checkout";
import "@testing-library/jest-dom";
import { dark } from "@/styles/themes/themes";

describe("checkout component", () => {
  it("should display the svg icon on the page", () => {
    render(
      <ThemeProvider theme={dark}>
        (<CheckoutPage />)
      </ThemeProvider>
    );
    const roleText = screen.getByAltText("logo");
    expect(roleText).toBeInTheDocument();
  });

  it("should display the confirmation message in the page", () => {
    render(
      <ThemeProvider theme={dark}>
        (<CheckoutPage />)
      </ThemeProvider>
    );

    const confirmationMessage = screen.getByText("Pedido confirmado!");
    expect(confirmationMessage).toBeInTheDocument();
  });

  it("should render the comeback to home paragraphy with link in the page", () => {
    render(
      <ThemeProvider theme={dark}>
        (<CheckoutPage />)
      </ThemeProvider>
    );

    const backToHomeMessage = screen.getByRole("link")
      
    expect(backToHomeMessage).toBeInTheDocument();
  });
});
