import styled from 'styled-components';
import { ContainerDiv, Fashion, MediumTextH } from '../../components';

function MatchingLoading() {
    return (
        <ContainerDiv>
            <Fashion />
            <LoadingContainerDiv>
                <img src="./image/loader.png" alt="loader" width="130px" height="130px" />
                <MediumTextH>퍼스널 컬러와 패션을 매칭하는 중입니다.</MediumTextH>
            </LoadingContainerDiv>
        </ContainerDiv>
    );
}

export { MatchingLoading };

const LoadingContainerDiv = styled(ContainerDiv)`
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 100px;
`;
