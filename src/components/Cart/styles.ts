import styled from "styled-components";

export const CartMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 80vh;
  height: auto;
  gap: 5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10rem 0;
  gap: 3rem 0;
  width: 40%;
  background: #f5f5f5;

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

    > img {
      height: 130px;
      width: 100px;
    }

    .product,
    .quantity,
    .price {
      height: 100%;

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
        gap: 0.5rem;

        button {
          font-size: 1.2rem;
        }
      }
    }
  }

  @media (max-width: 768px) {
    width: 80%;
    margin: 2rem 0;
    gap: 1.2rem;

    > div {
      align-items: flex-start;
      gap: 0.5rem;

    }

    > div > img {
      height: 100px;
      width: 70px;
    }

    .price,
    .product,
    .quantity {
      align-items: flex-start;

      p {
        font-size: 0.8rem;
      }
    }
  }
`;

export const ReviewOrder = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  gap: 3rem;

  .shipment,
  .subtotal,
  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .shipment {
    input {
      margin-left: 20px;
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
