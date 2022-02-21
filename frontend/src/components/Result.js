// import Box from '@mui/material/Box';
import styled from 'styled-components';

export function Result() {
    return <BoxDiv>이미지</BoxDiv>;
}

const BoxDiv = styled.div`
    @media ${({ theme }) => theme.device.mobile} {
        background-color: ${({ theme }) => theme.color.lightgray};
        position: relative;
        width: 222.94px;
        height: 161.07px;
        background: #c4c4c4;
    }
    background-color: ${({ theme }) => theme.color.lightgray};
    position: relative;
    width: 400px;
    height: 250px;
    background: #c4c4c4;
    margin-top: 20px;

    color: ${({ theme }) => theme.color.blue};
    background-color: ${props => props.theme.color.blue};
`;
