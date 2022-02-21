import styled from 'styled-components';
import { Article, ContainerDiv } from '../../components';

export function MyPage() {
    return (
        <Article marginTop="7vh" height="93vh">
            <FlexContainerDiv>
                <FlexRowDiv className="area">
                    <UserInfoDiv />
                    <PersonalDiv />
                </FlexRowDiv>
                <FassionDiv className="area" />
            </FlexContainerDiv>
        </Article>
    );
}

// styled-components

const FlexContainerDiv = styled(ContainerDiv)`
    height: 100%;

    ${({ theme }) => theme.flexStyled.flexColumn};
    ${({ theme }) => theme.flexStyled.flexCenter};

    .area {
        width: 100%;
        height: 50%;
    }
`;

const FlexRowDiv = styled.div`
    ${({ theme }) => theme.flexStyled.flexRow};

    div {
        width: 50%;
    }
`;

const UserInfoDiv = styled.div`
    background-color: yellow;
`;

const PersonalDiv = styled.div`
    background-color: gray;
`;

const FassionDiv = styled.div`
    background-color: green;
`;
