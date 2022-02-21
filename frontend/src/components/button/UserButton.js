import styled from 'styled-components';
import { HomeButton } from './HomeButton';

export const UserButton = styled(HomeButton).attrs(props => ({
    type: props.type,
}))`
    height: ${({ height }) => height};

    border-radius: 10px;
`;
