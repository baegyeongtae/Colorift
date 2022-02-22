import styled from 'styled-components';

export const TitleP = styled.p.attrs({
    className: 'title',
})`
    font-size: ${({ theme }) => theme.fontSizes.title};
    font-weight: bold;
    color: ${({ color }) => color};
`;
