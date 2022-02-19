import styled from 'styled-components';

export const Article = styled.article`
    height: ${({ height }) => height || 'auto'};

    background-color: ${({ color }) => color || 'white'};
`;
