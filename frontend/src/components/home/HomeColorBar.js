import styled from 'styled-components';

export function HomeColorBar() {
    return (
        <BarContainerDiv>
            <ColorBarDiv width="70" top="0" color="spring" />
            <ColorBarDiv width="60" top="30" color="summer" />
            <ColorBarDiv width="50" top="60" color="autumn" />
            <ColorBarDiv width="40" top="90" color="winter" />
        </BarContainerDiv>
    );
}

// styled-components

const BarContainerDiv = styled.div`
    width: 100%;
    height: 200px;

    position: relative;

    margin: 100px 0;
`;

const ColorBarDiv = styled.div`
    width: ${({ width }) => width}%;
    height: 20px;

    position: absolute;
    top: ${({ top }) => top}%;
    right: 0;

    background-color: ${({ theme, color }) =>
        (color === 'spring' && theme.color.spring) ||
        (color === 'summer' && theme.color.summer) ||
        (color === 'autumn' && theme.color.autumn) ||
        (color === 'winter' && theme.color.winter)};
`;
