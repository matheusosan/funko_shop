import styled from 'styled-components';

export const ProductPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 2rem;
    min-height: 80vh;

    >div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .product-details {
        display: flex;
        width: 20%;
        flex-direction: column;
        
        button {
            border-radius: 5px;
            background: ${props => props.theme.colors.blue1};
            padding: 15px;
        }
    }

`