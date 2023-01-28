import styled from "styled-components";

export const ProductPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 8rem;
  min-height: 80vh;
  margin: 1.5rem 0;
  color: ${props => props.theme.colors.text};

  > div {
    display: flex;
  }

  .photo-gallery {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    #main-img {
      width: 250px;
      height: 300px;
    }
  }

  .product-details {
    display: flex;
    width: 20%;
    flex-direction: column;
    gap: 1.3rem;
    border: 1px solid gray;
    border-radius: 8px;
    padding: 20px;

    button {
      border-radius: 5px;
      background: ${(props) => props.theme.colors.blue1};
      padding: 15px;
      color: #fff;
      font-weight: 700;
      font-size: 1.2rem;
      cursor: pointer;

      :hover {
        background: ${(props) => props.theme.colors.blue4};
        transition: .3s ease;
        
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;

    #main-img {
      width: 150px;
      height: 200px;
    }

    .product-details {
      width: 80%;
    }
  }
`;
