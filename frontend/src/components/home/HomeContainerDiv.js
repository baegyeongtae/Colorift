import styled from 'styled-components';
import { ContainerDiv } from '../area/ContainerDiv';

export const HomeContainerDiv = styled(ContainerDiv)`
    opacity: 0;

    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    height: 100%;

    padding: 150px 0;

    &.event {
        opacity: 1;
        transition: opacity 1.3s ease-in-out;
    }

    @media ${({ theme }) => theme.device.tablet} {
        grid: unset;

        display: grid;
        grid-template-row: 1fr 1fr;

        padding: 100px 0;
    }
`;
