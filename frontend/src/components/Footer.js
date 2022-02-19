import styled from 'styled-components';

export function Footer() {
    return <FooterDiv>© COLOR FIT. All rights reserved.</FooterDiv>;
}

const FooterDiv = styled.div`
    @media ${({ theme }) => theme.device.mobile} {
        background-color: ${({ theme }) => theme.color.darkgray};
        color: ${({ theme }) => theme.color.lightgray};
        position: fixed !important;
        text-align: center;
        width: 100vw;
        height: 3vh;
        line-height: 3vh;
        bottom: 0;
        font-size: ${({ theme }) => theme.fontSizes.mobiletext};
    }

    position: fixed !important;
    text-align: center;
    width: 100vw;
    height: 5vh;
    line-height: 5vh;
    bottom: 0;
    font-size: ${({ theme }) => theme.fontSizes.mobiletext};
    color: ${({ theme }) => theme.color.lightgray};
    background-color: ${props => props.theme.color.darkgray};
`;
