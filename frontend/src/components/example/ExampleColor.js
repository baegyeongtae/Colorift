import styled from 'styled-components';
import { ContainerDiv } from '..';

export function ExampleColor() {
    const colorData = {
        spring: [
            '#FFF9BF',
            '#FEF104',
            '#FAAC84',
            '#EF6534',
            '#E41B23',
            '#F2625F',
            '#F59C8C',
            '#FCCCA6',
            '#F5E8C8',
            '#FFC353',
            '#FCDEB8',
            '#D5E14E',
            '#A0CD70',
            '#70B33F',
            '#00A263',
            '#D0E4A5',
            '#9FD5B3',
            '#71C7A4',
            '#45C4D3',
            '#BD84B1',
            '#A68660',
            '#B8785D',
        ],
    };
    return (
        <ColorContainerDiv>
            {colorData.spring.map(item => (
                <ColorDiv color={item} key={item} />
            ))}
        </ColorContainerDiv>
    );
}

// styled-components;

const ColorContainerDiv = styled(ContainerDiv)`
    padding: 50px 0;

    text-align: center;
`;

const ColorDiv = styled.div`
    display: inline-block;
    width: 85px;
    height: 85px;

    margin: 10px;

    border-radius: 50%;

    background-color: ${({ color }) => color};

    @media ${({ theme }) => theme.device.mobile} {
        width: 70px;
        height: 70px;

        margin: 10px;
    }
`;
