import styled from 'styled-components';
import { ContainerDiv } from '../area/ContainerDiv';

export const HomeContainerDiv = styled(ContainerDiv)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    height: 100%;

    @media ${({ theme }) => theme.device.tablet} {
        all: unset;

        display: grid;
        grid-template-row: 1fr 1fr;

        div:nth-child(1) {
            order: 2;
        }

        div:nth-child(2) {
            order: 1;
        }
    }
`;
