import styled from "styled-components";

export const SideBar = styled.aside`
  position: absolute;
  right: 0;
  top: 0;
  background: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  height: 100vh;
  animation: slide-left .3s;
  box-shadow: 6px 6px 15px -8px rgba(0, 0, 0, 0.75);
  z-index: 10;

  >h2 {
      margin-top: 10rem;
      text-align: center;
      color: ${props => props.theme.colors.text};
    }

  #side-top {
    display: flex;
    align-items: center;
    background: ${props => props.theme.colors.blue1};
    height: 8vh;
    width: 100%;

    svg {
      color: white;
      font-size: 1.6rem;
    }
  }

  button {
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 1rem;
    color: #fff;
    cursor: pointer;
    background: ${(props) => props.theme.colors.blue4};
    transition: 0.3s ease;

    :hover {
      background: ${(props) => props.theme.colors.blue5};
    }
  }

  @keyframes slide-left {
      0% {
        right: 0;
        width: 0;
        opacity: 0;
      }
      100% {
        width: 95%;
        opacity: 1;
      }
    }
`;

export const SideContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 3rem 0;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  gap: 2rem;
`;

export const SideItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  color: black;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  border-radius: 8px;
  border-bottom: 1px solid gray;

  img {
    width: 100px;
    height: 150px;
  }

  h3, p {
    padding: 0 10px;
  }

  h3 {
    font-size: 1rem;
    width: 40%;
  }

  svg {
    font-size: 1.3rem;
    color: ${props => props.theme.colors.text};
  }

  button {
    margin-top: 1.5rem;
  }
`;
