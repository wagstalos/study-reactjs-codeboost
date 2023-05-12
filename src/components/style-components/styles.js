import styled from 'styled-components'

export const StylesCard = styled.div`
    border: 1px solid gray;
    max-width: 45%;
    padding:16px;
    border-radius: 8px;

    h2{
        color: ${({titleChangeColor}) => (titleChangeColor) ? 'red' : 'blue'}
    }

    button{
        background-color: #000;
        color: #fff;
        width: 100%
    }
`