import styled from 'styled-components';

export const Article = styled.article`
    height: ${({ height }) => height || '700px'};

    background-color: ${({ color }) => color || 'white'};
`;
