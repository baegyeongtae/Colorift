import styled from 'styled-components';

export const Article = styled.article`
    ${({ theme }) => theme.flexStyled.flexCenter};

    width: 100%;
    height: 100%;

    position: absolute;
    left: 0;
    top: 0;
`;
