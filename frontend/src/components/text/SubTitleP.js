import styled from 'styled-components';

export const SubTitleP = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.bigtext};
    font-weight: bold;
    text-align: center;
    margin: 3vh 30px;
    color: ${({ theme }) => theme.color.white};
    background-color: ${props => props.theme.color.white};

    @media ${({ theme }) => theme.device.mobile} {
        font-size: ${({ theme }) => theme.fontSizes.mediumtext};
        font-weight: bold;
        margin: 1vh 20px;
    }
`;
