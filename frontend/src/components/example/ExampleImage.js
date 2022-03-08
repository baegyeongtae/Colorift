import styled from 'styled-components';
import { ContainerDiv } from '..';
import images from '../../image/season';

export function ExampleImage({ season }) {
    return (
        <ImageContainerDiv>
            {[1, 2, 3, 4].map(item => (
                <ExampleImg
                    key={item}
                    src={images[`${season}${item}`]}
                    alt={`계절별 퍼스널 컬러 연예인 이미지 ${item}`}
                />
            ))}
        </ImageContainerDiv>
    );
}

// styled-components

const ImageContainerDiv = styled(ContainerDiv)`
    ${({ theme }) => theme.flexStyled.flexRow};
    flex-wrap: wrap;
`;

const ExampleImg = styled.img`
    display: block;

    width: 25%;
    height: 400px;

    @media ${({ theme }) => theme.device.tablet} {
        width: 50%;
        height: 40vh;
    }
`;
