import styled from "styled-components";

export const CartMain = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  min-height: 80vh;
  height: auto;
  gap: 5rem;
  color: ${props => props.theme.colors.text};


  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
    gap: 0;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 5rem 0;
  gap: 3rem 0;
  width: 40%;
  background: ${props => props.theme.colors.background};
  

  > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    text-align: center;
    align-items: center;
    border-bottom: 1px solid black;

    >svg {
        cursor: pointer;
      }

    >a>img {
       height: 130px;
       width: 100px;
     }

    .product,
    .quantity,
    .price {
      height: 100%;
      width: 25%;

      h3 {
        font-size: 1rem;
      }
    }

    .quantity {
      display: flex;
      align-items: center;
      flex-direction: column;

      .handle-quantity {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        button {
          font-size: 1.2rem;
          background: ${props => props.theme.colors.background};
          color: #fff;
        }
      }
    }
  }

  @media (max-width: 768px) {
    align-items: center;
    width: 80%;
    margin: 2rem 0;
    gap: 1.2rem;

    > div {
      align-items: flex-start;
      gap: 0.5rem;
      text-align: center;

      svg {
        font-size: 1rem;
      }
    }

    > div > a> img {
      height: 80px;
      width: 50px;
    }

    .price,
    .product,
    .quantity {
      align-items: flex-start;
      width: 30%;

      p {
        font-size: 0.8rem;
      }
    }
  }
`;

export const ReviewOrder = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  gap: 3rem;

  form {
    display: flex;
    align-items: center;
    gap: 1rem;

    input {
      padding: 5px;
      border-radius: 8px;
      border: none;
    }

    input[value="Aplicar"]{
      color: ${props => props.theme.colors.text};
      background: ${props => props.theme.colors.blue1};
      padding: 5px;
      cursor: pointer;
    }
  }


  button {
    width: 330px;
    height: 40px;
    background: ${(props) => props.theme.colors.blue1};
    color: #fff;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    margin: 2rem 0;
  }
`;
