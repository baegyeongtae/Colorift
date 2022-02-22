import styled from 'styled-components';

export const Article = styled.article`
    height: ${({ height }) => height};

    background-color: ${({ color }) => color};
`;
