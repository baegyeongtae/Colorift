import styled from 'styled-components';

export function Footer() {
    return <FooterDiv>© COLOR FIT. All rights reserved.</FooterDiv>;
}

const FooterDiv = styled.footer`
    @media ${({ theme }) => theme.device.mobile} {
        height: 3vh;
        line-height: 3vh;
    }

    position: absolute;
    bottom: 0;
    text-align: center;
    width: 100%;
    height: 5vh;
    line-height: 5vh;
    font-size: ${({ theme }) => theme.fontSizes.mobiletext};
    color: ${({ theme }) => theme.color.lightgray};
    background-color: ${props => props.theme.color.darkgray};
`;
