import styled from 'styled-components';
import { ContainerDiv } from '..';

export function ExampleImage({ season }) {
    return (
        <ImageContainerDiv>
            {[1, 2, 3, 4].map(item => (
                <ExampleImg
                    key={item}
                    src={`./image/season/${season}${item}.jpg`}
                    alt={`계절별 퍼스널 컬러 연예인 이미지 ${item}`}
                />
            ))}
        </ImageContainerDiv>
    );
}

// styled-components

const ImageContainerDiv = styled(ContainerDiv)`
    ${({ theme }) => theme.flexStyled.flexRow};
`;

const ExampleImg = styled.img`
    display: block;

    width: 25%;
`;
