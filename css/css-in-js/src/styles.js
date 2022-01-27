import styled from 'styled-components';

export const Button = styled.h1`
    color: black;
    display: flex;
    flex-direction: column;
    font-size: 50px;
    background-color: ${ props => props.styles.background};
`;