import styled from 'styled-components';
import { logoIcon } from '../../image';

export function Logo() {
    const handleLogoClick = () => {
        window.open('/', '_self');
    };

    return (
        <LogoDiv onClick={handleLogoClick}>
            <LogoImg src={logoIcon} />
        </LogoDiv>
    );
}

const LogoDiv = styled.div`
    ${({ theme }) => theme.flexStyled.flexCenter};

    margin: 0 1vw;

    cursor: pointer;
`;

const LogoImg = styled.img`
    display: block;

    width: 100px;
    height: 30px;
`;
