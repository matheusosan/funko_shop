import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  color: ${(props) => props.theme.colors.text};

  img {
    height: 25rem;
    width: 25rem;
  }

  h2 {
    font-size: 2.5rem;
  }
  > p > a {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    img {
      height: 20rem;
      width: 20rem;
    }
    h2 {
      font-size: 2.3rem;
    }
  }
`;
