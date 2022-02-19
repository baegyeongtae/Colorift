import styled from 'styled-components';
import { ContainerDiv, BigTextP } from '..';

export function ExampleTitle({ text }) {
    return (
        <ExampleTitleDiv>
            <TitleContainerDiv>
                <BigTextP color="white">{text}</BigTextP>
            </TitleContainerDiv>
        </ExampleTitleDiv>
    );
}

// styled-components

const ExampleTitleDiv = styled.div`
    height: 100px;

    background-color: ${({ theme }) => theme.color.darkgray};
`;

const TitleContainerDiv = styled(ContainerDiv)`
    line-height: 100px;

    padding-left: 10px;
`;
