import styled from 'styled-components';
import { Color, ContainerDiv, SubTitleP } from '../../components';

function Loading() {
    return (
        <>
            <Color />
            <LoadingContainerDiv>
                <img src="./image/loader.png" alt="loader" width="130px" height="130px" />
                <SubTitleP>피부톤을 분석하는 중입니다.</SubTitleP>
            </LoadingContainerDiv>
        </>
    );
}

export { Loading };

// styled-components

const LoadingContainerDiv = styled(ContainerDiv)`
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 100px;
`;
