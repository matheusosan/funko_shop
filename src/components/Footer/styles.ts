import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 100%;
  padding: 2rem 0;
  background: #000000;
  
  .mid-line {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: auto;
    gap: 6rem;
    margin: 3rem 0px 6rem 0px;
    h2 {
      color: #fbb034;
    }
    
    .about,
    .help {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      font-weight: 400;
      font-size: 15px;
      h2 {
        font-weight: 400;
        font-size: 17px;
        color: ${props => props.theme.colors.blue4}
      }
      a {
        opacity: 0.8;
      }
      a:hover {
        opacity: 1;
      }
    }
    
  }
  .bottom-line {
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    width: 70%;
    
    span {
      display: flex;
      gap: 2rem;
    }
    svg {
      font-size: 1.6rem;
      cursor: pointer;
    }
  }
  @media (max-width: 420px) {
    height: auto;
    .first-line {
        p {
            font-size: 1rem;
        }
        button {
            font-size: .8rem;
            padding: 0px 20px;
        }
    }
    .mid-line {
        flex-direction: column;
    }
    .bottom-line {
        span {
            font-size: 8px;
            gap: 1rem;
        }
        svg {
            font-size: 1rem;
        }
        margin-bottom: 2rem;
    }
  }
`;