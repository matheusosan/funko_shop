import styled from "styled-components";

export const SideBar = styled.aside`
  position: absolute;
  right: 0;
  top: 0;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 100vh;
  animation: slide-left ease 0.8s;
  box-shadow: 6px 6px 15px -8px rgba(0, 0, 0, 0.75);
  z-index: 10;

  #side-top {
    display: flex;
    align-items: center;
    background: ${props => props.theme.colors.blue1};
    height: 8vh;
    width: 100%;

    svg {
      color: white;
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
        width: 60%;
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
  overflow-y: auto;
  gap: 2rem;

`;

export const SideItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: black;
  background: #fff;
  padding: 8px 20px;
  border-radius: 8px;
  border-bottom: 1px solid gray;

  img {
    width: 100px;
    height: 150px;
  }

  p {
    padding: 0 10px;
    font-size: 1rem;
  }

  svg {
    color: black;
  }

  button {
    margin-top: 1.5rem;
  }
`;
