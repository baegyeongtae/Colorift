// import Box from '@mui/material/Box';
import styled from 'styled-components';

export default function Result() {
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

    color: ${({ theme }) => theme.color.blue};
    background-color: ${props => props.theme.color.blue};
`;
