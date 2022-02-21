import styled from 'styled-components';

export function Logo() {
    return (
        <LogoDiv>
            <LogoImg src="./image/logo.png" />
        </LogoDiv>
    );
}

const LogoDiv = styled.div`
    ${({ theme }) => theme.flexStyled.flexCenter};

    margin: 0 2vw;
`;

const LogoImg = styled.img`
    display: block;

    width: 100px;
    height: 30px;
`;
