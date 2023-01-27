import styled from "styled-components";

export const Header = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  background: ${(props) => props.theme.colors.blue1};
  height: 8vh;
  width: 100%;
  box-shadow: 6px 6px 15px -8px rgba(0, 0, 0, 0.75);

  svg {
    font-size: 1.4rem;
    color: #fff;
  }

  #cart-menu {
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    gap: 0.2rem;

    p {
      margin-bottom: 5px;
      color: #fff;
    }
  }

  #burguer-menu {
    display: none;
  }

  @media(max-width: 768px) {
    #cart-menu {
      display: none;
    }

    #burguer-menu {
      display: flex;
    }
  }
`;
