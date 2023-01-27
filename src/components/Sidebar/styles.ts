import styled from "styled-components";

export const SideBar = styled.aside`
  position: absolute;
  background: ${(props) => props.theme.colors.blue1};
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 100vh;
  animation: slide-left ease 0.8s;
  box-shadow: 6px 6px 15px -8px rgba(0, 0, 0, 0.75);

  svg {
    position: absolute;
    top: 3%;
    left: 5%;
    cursor: pointer;
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 60%;
  height: 30%;
  color: black;
  background: #fff;
  padding: 8px 20px;
  border-radius: 8px;

  img {
    width: 50px;
    height: 80px;
  }

  h3 {
    font-size: .8rem;
  }

  p {
    font-size: .6rem;
  }

  button {
    margin-top: 1.5rem;
  }
`;
