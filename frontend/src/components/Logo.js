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
    ${({ theme }) => theme.flexStyled.flexCenter};

    margin: 0 2vw;
`;

const LogoImg = styled.img`
    display: block;

    width: 100px;
    height: 30px;
`;
