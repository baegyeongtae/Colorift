import styled from 'styled-components';

export const BackgroundArticle = styled.article`
    height: ${({ height }) => height};

    background-color: ${({ color }) => color};
`;
