import React from 'react';
import styled from 'styled-components';

export const HomeColorBar = React.forwardRef((props, ref) => (
    <BarContainerDiv ref={ref}>
        <ColorBarDiv width="70" top="0" color="spring" />
        <ColorBarDiv width="60" top="30" color="summer" />
        <ColorBarDiv width="50" top="60" color="autumn" />
        <ColorBarDiv width="40" top="90" color="winter" />
    </BarContainerDiv>
));

// styled-components

const BarContainerDiv = styled.div`
    width: 100%;
    height: 200px;

    position: relative;

    margin: 100px 0;

    &.event {
        div:nth-child(1) {
            width: 70%;
            transition: width 1s ease-in-out;
        }
        div:nth-child(2) {
            width: 60%;
            transition: width 1.2s ease-in-out;
        }
        div:nth-child(3) {
            width: 50%;
            transition: width 1.5s ease-in-out;
        }
        div:nth-child(4) {
            width: 40%;
            transition: width 1.8s ease-in-out;
        }
    }
`;

const ColorBarDiv = styled.div`
    width: 0px;
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
