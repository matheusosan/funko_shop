import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 80vh;
  height: auto;
  background: ${(props) => props.theme.colors.background};

  > h2 {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    color: ${(props) => props.theme.colors.text};
  }
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 70%;
  height: 70%;
  margin: 5rem 0;
  gap: 4rem;

  @media (max-width: 768px) {
    width: 100%;
    gap: 2rem;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: ${(props) => props.theme.colors.cardBg};
  width: 200px;
  height: 400px;
  text-align: center;
  box-shadow: 6px 6px 15px -8px rgba(0, 0, 0, 0.75);
  padding: 30px;
  border-radius: 5px;
  transition: 0.5s ease;

  img {
    width: 150px;
    height: 200px;
  }

  h3 {
    color: black;
    font-weight: 700;
    font-size: 0.9rem;
  }

  p {
    color: black;
    font-weight: 400;
    font-size: 0.9rem;
    cursor: text;
  }

  button {
    padding: 5px 0;
    border-radius: 5px;
    width: 70%;
    background: ${(props) => props.theme.colors.blue1};
    font-size: 1.2rem;
    cursor: pointer;

    :hover {
      background: ${(props) => props.theme.colors.blue4};
    }
  }

  @media (max-width: 768px) {
    width: 150px;
  }
`;
