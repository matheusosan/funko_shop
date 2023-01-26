import styled from "styled-components";

export const Header = styled.header `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    background: ${props => props.theme.colors.blue1};
    height: 8vh;
    width: 100%;

    svg {
    font-size: 1.3rem;
}

    div {
        display: flex;
        align-items: center;
        font-size: 1.3rem;
        gap: .2rem;

        p {
            margin-bottom: 5px;
            color: #fff;
        }
    }



`