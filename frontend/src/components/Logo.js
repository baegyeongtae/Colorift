import styled from 'styled-components';

function Logo() {
    return (
        <LogoDiv>
            <LogoImg src="./image/logo.png" />
        </LogoDiv>
    );
}

export { Logo };

const LogoDiv = styled.div`
    width: 30%;

    ${({ theme }) => theme.flexStyled.flexCenter};
`;

const LogoImg = styled.img`
    width: 100px;
    height: 30px;
`;
