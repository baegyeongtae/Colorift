import styled from 'styled-components';
import { ContainerDiv } from '../ContainerDiv';

export const HomeContainerDiv = styled(ContainerDiv)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    height: 100%;

    @media ${({ theme }) => theme.device.tablet} {
        all: unset;

        display: grid;
        grid-template-row: 1fr 1fr;

        padding: 10vh 0;
    }
`;
