import styled from 'styled-components';
import { HomeButton } from './HomeButton';

export const UserButton = styled(HomeButton)`
    height: ${({ height }) => height};

    border-radius: 5px;
`;
