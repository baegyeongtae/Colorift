// import Box from '@mui/material/Box';
import styled from 'styled-components';

export default function Result() {
    return <BoxDiv>이미지</BoxDiv>;
}

const BoxDiv = styled.div`
    @media ${({ theme }) => theme.device.mobile} {
        background-color: ${({ theme }) => theme.color.lightgray};
        position: absolute;
        width: 222.94px;
        height: 161.07px;
        left: 86.36px;
        top: 206px;

        background: #c4c4c4;
        transform: matrix(1, 0, 0, 1, 0, 0);
    }

    color: ${({ theme }) => theme.color.blue};
    background-color: ${props => props.theme.color.blue};
`;
