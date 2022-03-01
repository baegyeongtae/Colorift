import styled from 'styled-components';
import { Article, ContainerDiv, NavBackgroundDiv } from '../../components';
import { MyPageInfo, MyPagePersonal, MyPageFashion } from '.';

export function MyPage() {
    return (
        <Article height="100vh">
            <NavBackgroundDiv />
            <MyPageContainerDiv>
                <FlexRowDiv className="area">
                    <MyPageInfo />
                    <PersonalDiv>
                        <SubTitleP>My Personal Color</SubTitleP>
                        <MyPagePersonal />
                    </PersonalDiv>
                </FlexRowDiv>
                <FassionDiv className="area fashion">
                    <SubTitleP>My Style</SubTitleP>
                    <MyPageFashion />
                </FassionDiv>
            </MyPageContainerDiv>
        </Article>
    );
}

// styled-components

const MyPageContainerDiv = styled(ContainerDiv)`
    ${({ theme }) => theme.flexStyled.flexColumn};
    ${({ theme }) => theme.flexStyled.flexCenter};

    .area {
        width: 100%;
        height: 50%;

        &.fashion {
            height: 50%;
        }
    }
`;

const FlexRowDiv = styled.div`
    ${({ theme }) => theme.flexStyled.flexRow};
    align-items: center;

    > div {
        width: 50%;
    }

    @media ${({ theme }) => theme.device.tablet} {
        ${({ theme }) => theme.flexStyled.flexColumn};
        ${({ theme }) => theme.flexStyled.flexCenter};

        margin: 50px 0;

        > div {
            width: 100%;
        }
    }
`;

const PersonalDiv = styled.div`
    @media ${({ theme }) => theme.device.tablet} {
        padding: 0 20px;
    }
`;

const SubTitleP = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.mediumtext};
    font-weight: bold;
`;

const FassionDiv = styled.div`
    @media ${({ theme }) => theme.device.tablet} {
        padding: 40px 20px;
    }
`;
