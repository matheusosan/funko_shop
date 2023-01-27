import styled from 'styled-components';
import bg from '@/assets/images/bg.jpg'

export const MainHome = styled.main `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    height: auto;
    padding: 5rem 0;
    width: 100%;
    background: ${props => props.theme.colors.background};

`

export const MainContent = styled.div `
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: auto;
        gap: 8rem;
        width: 100%;

        .content-container {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 3rem;


            .img-container {
                display: flex;
                justify-content: center;
                width: 30%;
            }
            
            .home-text {
                display: flex;
                gap: 1rem;
                flex-direction: column;
                width: 30%;

                button {
                    padding: 10px 20px;
                    border-radius: 5px;
                    font-size: 1rem;
                    color: #fff;
                    cursor: pointer;
                    background: ${props => props.theme.colors.blue1};
                    transition: .3s ease;

                    :hover {
                        background: ${props => props.theme.colors.blue4};
                    }
                }
            }
    
        }




        @media (max-width: 768px) {
            gap: 2rem;
            
            .content-container {
                width: 90%;
                flex-direction: column;

                .home-text {
                    align-items: center;
                    width: 70%;

                    h2 {
                        font-size: 1.9rem;
                        text-align: center;
                    }

                    p {
                        font-size: 1.3
                    }
                }
            }


        }


`